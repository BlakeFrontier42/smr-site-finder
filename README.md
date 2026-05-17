# SMR Site Finder

> **Where should America build its next nuclear reactors?**
> An interactive geospatial dashboard scoring 30+ candidate sites for Small Modular Reactor (SMR) deployment across the U.S. — built with Next.js, React Leaflet, and a hand-curated dataset from DOE, EIA, NRC, and USGS sources.

🌐 **Live demo:** <https://smr-site-finder.vercel.app>

**Built by [Blake Holley](https://www.linkedin.com/in/blake-holley-0b4753235)** — IT & Automation Engineer / Python Developer
📧 blake.frontierlabs@gmail.com  ·  🐙 [github.com/BlakeFrontier42](https://github.com/BlakeFrontier42)

---

## Why this exists

The U.S. is on the front edge of a nuclear renaissance. The first commercial SMR construction permits are being filed (TVA's BWRX-300 at Clinch River, TerraPower's Natrium in Kemmerer WY). Hundreds of coal plants are retiring with thousands of megawatts of stranded transmission infrastructure attached to them.

This tool answers a concrete strategic question: **given everything we know about grid demand, water access, seismic risk, infrastructure, population, and state policy — where are the best sites in the U.S. to put the next SMRs?**

**Key finding the data surfaces:** a large share of optimal sites are at retiring coal plants. Those sites already have switchyards, transmission rated for thousands of megawatts, water access, and grid connections — converting them could save billions versus building greenfield.

---

## What it does

- **Interactive map** of 30+ candidate SMR sites scored 0–100 across six dimensions
- **Site detail panel** with company, reactor model (BWRX-300, Natrium, etc.), timeline, funding status, capacity, and curated notes per site
- **Site categories** — confirmed active projects, coal-retirement opportunities, brownfield, greenfield, existing-nuclear adjacency
- **About / methodology page** explaining the scoring rubric and data provenance
- **Companies page** profiling the developers in the SMR market

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | **Next.js 16** (App Router) + **React 19** + **TypeScript** |
| Mapping | **React Leaflet 5** + Leaflet 1.9 |
| Styling | **Tailwind CSS 4** + dark cyan/amber design system |
| Icons | Lucide React |
| Hosting | **Vercel** |
| Data | Static TypeScript modules (`src/data/sites.ts`, `src/data/companies.ts`) sourced from DOE, EIA, NRC, USGS, state energy commissions |

Why static data over a backend: the SMR market moves at the speed of regulatory filings, not seconds. Hand-curated, type-safe data is faster to query, free to host, and trivially audit-able — every site can be traced back to its source.

---

## Scoring Methodology

Each site is scored on six factors:

| Factor | Source | Why it matters |
|---|---|---|
| **Grid Demand** | EIA regional load + growth projections | Reactors should land where electrons are scarce |
| **Water Access** | USGS — rivers, lakes, coast | Cooling is non-negotiable |
| **Seismic Risk** | USGS seismic hazard maps | Site stability over 60+ year operating life |
| **Infrastructure** | NRC + DOE — existing switchyards, transmission lines | Stranded infrastructure = billions saved |
| **Population Balance** | Census | Workforce access vs. safety buffer |
| **Policy** | State-by-state nuclear posture | Permitting climate predicts cost & timeline |

Full methodology lives at `/about` on the live site.

---

## Run it locally

```bash
git clone https://github.com/BlakeFrontier42/smr-site-finder.git
cd smr-site-finder
npm install
npm run dev
```

Open <http://localhost:3000>.

---

## Demonstrated Skills

| Domain | Evidence in this repo |
|---|---|
| **Frontend** | Next.js 16 App Router, React 19, TypeScript end-to-end |
| **Geospatial / data viz** | React Leaflet integration, scored map markers, detail panels |
| **Research / data curation** | 30+ sites compiled from 5+ authoritative sources, fully typed |
| **Design** | Custom dark theme, deliberate color semantics, responsive layout |
| **Deployment** | Vercel CI/CD, production app under custom routing |
| **Domain ability** | Translated a fuzzy policy/engineering question into a quantitative tool |

---

## Repo Map

| Path | Contents |
|---|---|
| `src/app/page.tsx` | Main map view |
| `src/app/about/page.tsx` | Methodology + key findings |
| `src/app/companies/page.tsx` | SMR developer profiles |
| `src/components/SiteMap.tsx` | Leaflet map component |
| `src/data/sites.ts` | The 30+ candidate sites dataset |
| `src/data/companies.ts` | Company/reactor catalog |
| `public/` | Static assets |

---

## Contact

I'm currently looking for full-time IT & automation roles — NOC, IT Support, Junior Systems Administrator, Technical Support Engineer, or Automation Engineer. Open to **Denver / Boulder / Colorado Springs CO** or **Remote**.

- **Email**: blake.frontierlabs@gmail.com
- **LinkedIn**: <https://www.linkedin.com/in/blake-holley-0b4753235>
- **GitHub**: <https://github.com/BlakeFrontier42>
- **Other portfolio piece**: [Lumare — Capital Intelligence Platform](https://github.com/BlakeFrontier42/lumare-project)
