# ⚡ TokenEnrich (`tokenenrich.com`)

> **Sub-140ms B2B Company Intelligence & Technographic Signals in ~180 Tokens**  
> Engineered for Claude Desktop, Cursor IDE, AI SDRs, and automated sales workflows (Clay, n8n, CrewAI).

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-1.0_Compliant-emerald.svg)](https://modelcontextprotocol.io)
[![Part of Quite Good Project](https://img.shields.io/badge/Maintained_by-Quite_Good_Project-09090b.svg)](https://quitegoodproject.com)

---

## 🧭 The Token & Speed Arbitrage

Raw website scraping dumps **25,000+ tokens** into an LLM context ($0.08 / call, 6s latency).  
**TokenEnrich** returns verified company signals in **~180 tokens** ($0.0005 / call, 140ms wire latency) — a **98.5% token reduction**.

---

## 🚀 Quickstart

### Claude Desktop & Cursor MCP Setup

> 🎁 **Free Sandbox Bonus**: Pass `--email you@company.com` in `args` to instantly double your free sandbox quota from 50 to **100 requests**! Zero credit card required.

```json
{
  "mcpServers": {
    "tokenenrich": {
      "command": "npx",
      "args": ["-y", "@quitegoodproject/tokenenrich-mcp", "--email", "you@company.com"]
    }
  }
}
```

Or run via CLI:
```bash
npx -y @quitegoodproject/tokenenrich-mcp --email you@company.com
```

### REST API (`GET /v1/enrich`)
```bash
curl "https://tokenenrich.com/v1/enrich?domain=linear.app" \
  -H "Authorization: Bearer <TOKENENRICH_API_KEY>"
```

---

## 🏛️ developer suite & Governance
Part of **[The Quite Good Project](https://quitegoodproject.com)** developer suite.
