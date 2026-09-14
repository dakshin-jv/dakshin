<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Georgia&weight=500&size=28&duration=3500&pause=900&color=C2410C&center=true&vCenter=true&width=780&lines=Dakshin+J+V;Applied+AI+Engineer;Forward+Deployed+Engineer;I+ship+agents+into+production" alt="Typing headline: Dakshin J V, Applied AI Engineer" />

  <p>
    <strong>Sr. AI Engineer @ Hexaware</strong> · Chennai · 4 years in ML / NLP / agents
  </p>

  <p>
    I sit with messy production problems and leave <strong>working</strong> AI systems.
  </p>

  <p>
    <a href="https://github.com/dakshin-jv"><img src="https://img.shields.io/github/followers/dakshin-jv?label=Follow&style=for-the-badge&logo=github&color=1c1612" alt="GitHub followers" /></a>
    <a href="mailto:dakshinjv@icloud.com"><img src="https://img.shields.io/badge/Email-dakshinjv%40icloud.com-c2410c?style=for-the-badge&logo=maildotru&logoColor=white" alt="Email" /></a>
    <a href="https://www.linkedin.com/in/dakshinjv"><img src="https://img.shields.io/badge/LinkedIn-dakshinjv-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
    <img src="https://komarev.com/ghpvc/?username=dakshin-jv&label=Profile+views&color=c2410c&style=for-the-badge" alt="Profile views" />
  </p>
</div>

---

<details open>
<summary><strong>20-second brief</strong> — click to fold</summary>
<br/>

| | |
| :--- | :--- |
| **Who** | Applied / forward-deployed AI engineer. 4 years in ML, NLP, and agent systems. |
| **Now** | Sr. AI Engineer at [Hexaware](https://www.hexaware.com) — agentic delivery on customer stacks. |
| **Do** | Discover the real workflow → prototype on *their* tools → harden → hand off something that runs. |
| **Proof** | [Memory for agents](https://github.com/dakshin-jv/Context-as-Service) · [RPA migration parser](https://github.com/dakshin-jv/migration-tool-parser) · [Trade agent](https://github.com/dakshin-jv/blockchain_trade) · [Local-LLM search](https://github.com/dakshin-jv/real-estate-UseBlocky) |
| **Talk** | [dakshinjv@icloud.com](mailto:dakshinjv@icloud.com) · [LinkedIn](https://www.linkedin.com/in/dakshinjv) |

**Open to** applied AI / FDE / AI engineer roles where the job is shipping with the customer, not only training models.

</details>

---

<details>
<summary><strong>What I actually do</strong></summary>
<br/>

Not a research-only profile. Most of the work is **applied**: get into the customer's process, pick the thinnest AI that solves it, and make it survive production.

- **Agent systems** — skills, tool orchestration, harnesses, evaluation — not just a chat box
- **Memory & RAG** — scoped, decaying, conflict-aware memory; local-first when data cannot leave the machine
- **Forward deployed delivery** — UiPath estates, wealth / fintech workflows, on-chain analytics: meet the stack, don't ask for a rewrite
- **Classical ML still matters** — ranking, classification, NLP, forecasting when an LLM is the wrong tool

```mermaid
flowchart LR
  A[Discover] --> B[Prototype on their stack]
  B --> C[Evaluate]
  C --> D[Harden]
  D --> E[Handoff]
  E -.-> A
```

</details>

---

## Selected work

Click a repo. Expand a card for the why.

<table>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/dakshin-jv/Context-as-Service">memoryServe / Context-as-Service</a></h3>
      <p>
        <a href="https://github.com/dakshin-jv/Context-as-Service"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" /></a>
        <img src="https://img.shields.io/badge/Qdrant-DC244C?logo=qdrant&logoColor=white" alt="Qdrant" />
        <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white" alt="FastAPI" />
      </p>
      <p>Local-first memory for agents: extract → conflict resolve → decay → forget. Hard isolation by project → user → session.</p>
      <details>
        <summary>Why it matters</summary>
        Agents that forget or leak context across projects are useless in enterprise. mem0-compatible API. Ollama / Azure OpenAI / Bedrock. SQLite lifecycle.
      </details>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/dakshin-jv/migration-tool-parser">UiPath → Power Automate parser</a></h3>
      <p>
        <a href="https://github.com/dakshin-jv/migration-tool-parser"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" /></a>
        <img src="https://img.shields.io/badge/C%23-239120?logo=csharp&logoColor=white" alt="C#" />
        <img src="https://img.shields.io/badge/RPA-c2410c" alt="RPA" />
      </p>
      <p>Ingest a <code>.nupkg</code>, score REFramework compliance, emit a graph of workflows, exceptions, selectors, and Config keys.</p>
      <details>
        <summary>Why it matters</summary>
        Classic FDE problem: migrate the estate they already run. 14-stage pipeline, Roslyn sidecar, 64 tests. Preserve Init / GetTransaction / Process / EndProcess.
      </details>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/dakshin-jv/blockchain_trade">Conversational trade agent</a></h3>
      <p>
        <a href="https://github.com/dakshin-jv/blockchain_trade"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" /></a>
        <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white" alt="FastAPI" />
        <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" alt="MongoDB" />
      </p>
      <p>Trader personality from real trade history. Behavioral scoring, streaming replies in first person, references to actual fills.</p>
      <details>
        <summary>Why it matters</summary>
        Turns a blotter into an explainable operator the trader can interrogate — not a generic market chatbot.
      </details>
    </td>
    <td width="50%" valign="top">
      <h3><a href="https://github.com/dakshin-jv/agent-skills-engine">Agent skills engine</a></h3>
      <p>
        <a href="https://github.com/dakshin-jv/agent-skills-engine"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" /></a>
        <img src="https://img.shields.io/badge/Agents-c2410c" alt="Agents" />
        <img src="https://img.shields.io/badge/SKILL.md-1c1612" alt="SKILL.md" />
      </p>
      <p>Toolkit for authoring reusable skills for coding agents and custom agentic systems.</p>
      <details>
        <summary>Why it matters</summary>
        Skills change <em>behavior</em>; tools change <em>reach</em>. This is how you productize the former.
      </details>
    </td>
  </tr>
  <tr>
    <td colspan="2" valign="top">
      <h3><a href="https://github.com/dakshin-jv/real-estate-UseBlocky">Natural-language apartment search</a></h3>
      <p>
        <a href="https://github.com/dakshin-jv/real-estate-UseBlocky"><img src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" alt="Python" /></a>
        <img src="https://img.shields.io/badge/Ollama-000000" alt="Ollama" />
        <img src="https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white" alt="FastAPI" />
      </p>
      <p>FastAPI + local Ollama over listings. Parse intent, filter, answer. Thin on purpose: no cloud round-trip for a housing query.</p>
    </td>
  </tr>
</table>

<details>
<summary>Earlier applied DS</summary>
<br/>

- [LiveOps ride monitoring](https://github.com/dakshin-jv/LiveOps)
- [Country clustering / GDP](https://github.com/dakshin-jv/Country-GDP)
- [DS project archive](https://github.com/dakshin-jv/DataScience-Projects)

</details>

---

<details>
<summary><strong>Path</strong></summary>
<br/>

| When | Role | Focus |
| :--- | :--- | :--- |
| 2025 — now | **Sr. AI Engineer**, Hexaware Technologies | Agentic delivery, Microsoft AI Foundry, customer-facing AI systems |
| Prior | **Data Scientist**, Centricity WealthTech | ML for private wealth / investment workflows |
| Prior | **On-chain Data Scientist**, Roni Analytics | Crypto market structure, on-chain analytics, trader-facing tools |
| Prior | **Data Scientist (NLP)**, Packt | NLP models and content / intelligence pipelines |

</details>

<details>
<summary><strong>Stack I ship with</strong></summary>
<br/>

<p>
  <img src="https://skillicons.dev/icons?i=python,ts,fastapi,react,pytorch,aws,azure,mongodb,postgres,linux,git,githubactions" alt="Python, TypeScript, FastAPI, React, PyTorch, AWS, Azure, MongoDB, Postgres, Linux, Git, GitHub Actions" />
</p>

**Languages** — Python, TypeScript, SQL, C# (Roslyn sidecar)  
**Models & agents** — Azure OpenAI, AWS Bedrock, Ollama, RAG, skills / harnesses, evaluation  
**Services** — FastAPI, Qdrant, SQLite, MongoDB, React  
**Applied ML** — pandas, scikit-learn, PyTorch, classic NLP  

</details>

<details>
<summary><strong>Right now</strong></summary>
<br/>

- Building **memoryServe** — lifecycle memory (active → superseded / stale → forgotten) with hard project isolation
- Deepening **agent skills** and Microsoft Foundry / Azure AI Foundry delivery patterns
- Looking at work where I can sit with operators and own the last mile

</details>

---

## Live GitHub

Click a chart to open the profile.

<div align="center">
  <a href="https://github.com/dakshin-jv">
    <img src="https://github-readme-stats.vercel.app/api?username=dakshin-jv&show_icons=true&include_all_commits=true&count_private=true&title_color=c2410c&icon_color=c2410c&text_color=1c1612&bg_color=f3eee4&hide_border=true" alt="GitHub stats" />
  </a>
  <a href="https://github.com/dakshin-jv?tab=repositories">
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=dakshin-jv&layout=compact&title_color=c2410c&text_color=1c1612&bg_color=f3eee4&hide_border=true&langs_count=6" alt="Top languages" />
  </a>
  <br/>
  <a href="https://github.com/dakshin-jv">
    <img src="https://streak-stats.demolab.com?user=dakshin-jv&background=f3eee4&border=f3eee4&stroke=e0d6c8&ring=c2410c&fire=c2410c&currStreakNum=1c1612&sideNums=1c1612&currStreakLabel=c2410c&sideLabels=5c534b&dates=5c534b" alt="GitHub streak" />
  </a>
  <br/>
  <a href="https://github.com/dakshin-jv">
    <img src="https://github-readme-activity-graph.vercel.app/graph?username=dakshin-jv&bg_color=f3eee4&color=5c534b&line=c2410c&point=c2410c&area=true&area_color=c2410c&hide_border=true" alt="Contribution activity graph" />
  </a>
</div>

---

<div align="center">
  <h2>Contact</h2>
  <p>If you need someone who can walk into an existing estate, find the bottleneck, and leave a system the team will run — write.</p>
  <p>
    <a href="mailto:dakshinjv@icloud.com">dakshinjv@icloud.com</a>
    ·
    <a href="https://www.linkedin.com/in/dakshinjv">LinkedIn</a>
    ·
    <a href="https://github.com/dakshin-jv">GitHub</a>
  </p>
</div>
