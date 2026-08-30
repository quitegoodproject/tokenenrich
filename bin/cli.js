#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

const API_BASE = process.env.TOKENENRICH_API_URL || "https://tokenenrich.com";
const API_KEY = process.env.TOKENENRICH_API_KEY || "";

const server = new Server({ name: "tokenenrich-mcp", version: "1.0.0" }, { capabilities: { tools: {} } });

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "enrich_company",
      description: "Sub-140ms firmographic and technographic intelligence in ~180 tokens. Extracts verified DNS mail provider, ATS job portal, CMS tech stack, and compliance signals.",
      inputSchema: {
        type: "object",
        properties: {
          domain: { type: "string", description: "Company root domain (e.g. stripe.com, linear.app)." }
        },
        required: ["domain"]
      }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  if (name === "enrich_company") {
    try {
      const res = await fetch(`${API_BASE}/v1/enrich?domain=${encodeURIComponent(args?.domain)}`, {
        headers: { "Authorization": API_KEY ? `Bearer ${API_KEY}` : "" }
      });
      const data = await res.json();
      return { content: [{ type: "text", text: JSON.stringify(data, null, 2) }] };
    } catch (err) {
      return { content: [{ type: "text", text: `Error: ${err.message}` }], isError: true };
    }
  }
  return { content: [{ type: "text", text: "Unknown tool" }], isError: true };
});

const transport = new StdioServerTransport();
server.connect(transport);
