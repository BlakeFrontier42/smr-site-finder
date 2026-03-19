// SMR Candidate Sites — comprehensive database
// Sources: DOE, EIA, NRC, USGS, company announcements, state energy commissions
// Last updated: March 2026

export interface SMRSite {
  id: string;
  name: string;
  lat: number;
  lng: number;
  state: string;
  score: number;
  type: "coal-retirement" | "brownfield" | "greenfield" | "existing-nuclear" | "confirmed-project";
  gridDemand: "high" | "medium" | "low";
  waterAccess: "river" | "lake" | "coast" | "limited";
  seismicRisk: "low" | "moderate" | "high";
  populationNearby: number;
  notes: string;
  retiringPlant?: string;
  estimatedCapacity: string;
  company?: string;
  reactor?: string;
  timeline?: string;
  fundingStatus?: string;
}

export const smrSites: SMRSite[] = [
  // ==========================================
  // CONFIRMED PROJECTS (active development)
  // ==========================================
  {
    id: "c1", name: "Clinch River Nuclear Site", lat: 35.8894, lng: -84.3900, state: "TN",
    score: 97, type: "confirmed-project", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 800, estimatedCapacity: "300",
    company: "TVA + GE Hitachi", reactor: "BWRX-300",
    timeline: "Construction permit application submitted May 2025. Site prep could begin 2026. Operational early 2030s.",
    fundingStatus: "$400M DOE grant (Dec 2025)",
    notes: "Nation's FIRST commercial SMR deployment. TVA submitted construction permit to NRC. $400M DOE cost-share. Adjacent to Oak Ridge National Lab. Near Clinch River — historic breeder reactor site. 300 MWe powering ~300,000 homes."
  },
  {
    id: "c2", name: "Kemmerer — TerraPower Natrium", lat: 41.7928, lng: -110.5375, state: "WY",
    score: 96, type: "confirmed-project", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 3, estimatedCapacity: "345",
    company: "TerraPower", reactor: "Natrium (Sodium-Cooled Fast Reactor)",
    timeline: "NRC final environmental approval Oct 2025. Site prep underway. Operational target 2030.",
    fundingStatus: "$2B+ (DOE ARDP + Bill Gates private funding)",
    retiringPlant: "Naughton coal plant (retiring 2025)",
    notes: "Bill Gates-backed. Built at retiring Naughton coal plant site near Kemmerer. Sodium-cooled fast reactor with integrated molten salt energy storage — can flex from 345 MW to 500 MW during peak. NRC environmental review complete. Most advanced private SMR project in America."
  },
  {
    id: "c3", name: "Seadrift — Dow/X-energy", lat: 28.4147, lng: -96.7133, state: "TX",
    score: 94, type: "confirmed-project", gridDemand: "high", waterAccess: "coast",
    seismicRisk: "low", populationNearby: 150, estimatedCapacity: "320",
    company: "X-energy + Dow Chemical", reactor: "Xe-100 (4-pack HTGR Pebble Bed)",
    timeline: "Construction expected to begin 2026. Operational end of decade.",
    fundingStatus: "$1.2B+ DOE ARDP + Dow partnership",
    notes: "First-ever industrial nuclear deployment. Four Xe-100 reactors providing both electricity AND process heat to Dow's chemical manufacturing plant. TRISO fuel cannot melt down — inherently safe. Historic: nuclear powering industrial manufacturing, not just the grid."
  },
  {
    id: "c4", name: "Hermes Demo — Kairos Power", lat: 35.9270, lng: -84.3850, state: "TN",
    score: 93, type: "confirmed-project", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 800, estimatedCapacity: "35 (demo) / 140 (commercial)",
    company: "Kairos Power", reactor: "Hermes / KP-FHR (Fluoride Salt-Cooled)",
    timeline: "Construction permit approved Dec 2023. Demo operational ~2027. Commercial early 2030s.",
    fundingStatus: "$629M DOE risk reduction + Google PPA for 500 MW",
    notes: "FIRST new US reactor construction permit in 50 years (Dec 2023). At East Tennessee Technology Park near Oak Ridge. Signed first-ever corporate nuclear PPA with Google for 500 MW. Uses molten fluoride salt coolant — low pressure, extreme safety margin. Hermes is a demo; commercial KP-FHR follows."
  },
  {
    id: "c5", name: "Palisades — Holtec SMR + Restart", lat: 42.3222, lng: -86.3153, state: "MI",
    score: 91, type: "confirmed-project", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 350, estimatedCapacity: "600 (2x SMR-300) + 800 (restart)",
    company: "Holtec International", reactor: "SMR-300",
    timeline: "Palisades restart Q1 2026. Two SMR-300 construction permit filed Jan 2026. SMRs operational ~2030.",
    fundingStatus: "$1.5B DOE loan for restart + $400M DOE SMR grant",
    notes: "Pioneering TWO nuclear firsts: (1) First-ever US nuclear plant restart at Palisades, and (2) Two new SMR-300 units at the same site. On Lake Michigan shore. Construction permit application submitted to NRC Jan 2026. Combined site will have ~1400 MW total capacity."
  },
  {
    id: "c6", name: "INL — Idaho National Laboratory", lat: 43.5155, lng: -112.0353, state: "ID",
    score: 95, type: "confirmed-project", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "moderate", populationNearby: 200, estimatedCapacity: "300-500",
    company: "Multiple (NuScale, Oklo, MARVEL)", reactor: "Multiple designs",
    timeline: "MARVEL microreactor approved. NuScale VOYGR planned. Oklo Aurora planned.",
    fundingStatus: "DOE's primary nuclear R&D facility — billions in cumulative investment",
    notes: "DOE's nuclear R&D headquarters and the most SMR-ready site in America. Multiple reactors planned: NuScale VOYGR, Oklo Aurora (Sam Altman-backed), and MARVEL microreactor (already approved). Testing ground for the entire US advanced nuclear program."
  },
  {
    id: "c7", name: "Oklo Aurora — INL", lat: 43.5100, lng: -112.0400, state: "ID",
    score: 89, type: "confirmed-project", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "moderate", populationNearby: 200, estimatedCapacity: "15",
    company: "Oklo (NYSE: OKLO)", reactor: "Aurora (Fast Neutron Microreactor)",
    timeline: "NRC combined license application submitted. Operational late 2020s.",
    fundingStatus: "Public company. Sam Altman (OpenAI CEO) is chairman.",
    notes: "Smallest commercial design at 15 MW. Can run 10+ years without refueling. Uses recycled nuclear fuel. Sam Altman-backed. Publicly traded NYSE: OKLO. Perfect for remote/military/data center applications."
  },

  // ==========================================
  // COAL RETIREMENT CONVERSION CANDIDATES
  // ==========================================
  {
    id: "r1", name: "Navajo Generating Station", lat: 36.9147, lng: -111.4558, state: "AZ",
    score: 88, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 180, estimatedCapacity: "600-900",
    retiringPlant: "Navajo GS (retired 2019, 2250 MW)",
    notes: "Existing grid infrastructure for 2250 MW. Near Lake Powell. Tribal consultation required. Massive transmission capacity already in place. One of the largest retired coal sites in the West."
  },
  {
    id: "r2", name: "San Juan Generating Station", lat: 36.8014, lng: -108.4381, state: "NM",
    score: 85, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 120, estimatedCapacity: "400-600",
    retiringPlant: "San Juan GS (retired 2022, 1848 MW)",
    notes: "Near San Juan River. Existing switchyard and transmission lines. Low seismic. NM actively exploring nuclear. Enchant Energy had explored carbon capture here — SMR could be better fit."
  },
  {
    id: "r3", name: "Jim Bridger Plant", lat: 41.7683, lng: -108.8461, state: "WY",
    score: 84, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 35, estimatedCapacity: "300-500",
    retiringPlant: "Jim Bridger (partial retirement 2023-2028, 2120 MW)",
    notes: "Wyoming is most nuclear-friendly state. TerraPower Natrium nearby. Low population density ideal for SMR. PacifiCorp exploring options for retired units."
  },
  {
    id: "r4", name: "Laramie River Station", lat: 42.1547, lng: -104.8517, state: "WY",
    score: 83, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 90, estimatedCapacity: "300-500",
    retiringPlant: "Laramie River (phasing out 2025-2030, 1710 MW)",
    notes: "Near Laramie River. Wyoming pro-nuclear policy. Existing high-voltage transmission. Basin Electric exploring options."
  },
  {
    id: "r5", name: "Colstrip Coal Complex", lat: 45.8842, lng: -106.6153, state: "MT",
    score: 82, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 45, estimatedCapacity: "300-500",
    retiringPlant: "Colstrip (units retiring 2025-2027, 2094 MW)",
    notes: "Major coal retirement. Near Yellowstone River. Low population. NorthWestern Energy exploring options. Transmission to Pacific Northwest. Montana Senate Energy Committee has discussed SMR conversion."
  },
  {
    id: "r6", name: "Gibson Generating Station", lat: 38.3656, lng: -87.7358, state: "IN",
    score: 81, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 300, estimatedCapacity: "400-600",
    retiringPlant: "Gibson (Indiana's largest coal plant, 3345 MW)",
    notes: "Near Wabash River. Largest coal plant in Indiana. Duke Energy exploring SMR options. Existing 3.3GW transmission infrastructure. Purdue study identified it as suitable for SMR development."
  },
  {
    id: "r7", name: "Scherer Plant", lat: 33.0464, lng: -83.8236, state: "GA",
    score: 80, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 450, estimatedCapacity: "500-900",
    retiringPlant: "Plant Scherer (largest US coal plant, 3564 MW)",
    notes: "Largest coal plant in US. Near Lake Juliette. Georgia Power already operates Vogtle nuclear (newest US reactor). Political support for nuclear exists in Georgia. Massive transmission infrastructure."
  },
  {
    id: "r8", name: "Martin Lake", lat: 32.2603, lng: -94.5703, state: "TX",
    score: 79, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 250, estimatedCapacity: "400-800",
    retiringPlant: "Martin Lake (potential retirement 2026-2030, 2250 MW)",
    notes: "ERCOT grid desperately needs baseload. Lake Martin nearby. Texas deregulated market = easier path. Massive demand growth from data centers."
  },
  {
    id: "r9", name: "Intermountain Power Plant", lat: 39.5133, lng: -112.5553, state: "UT",
    score: 78, type: "coal-retirement", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "moderate", populationNearby: 15, estimatedCapacity: "300-500",
    retiringPlant: "Intermountain (retiring 2025, 1800 MW)",
    notes: "Major transmission hub serving LA DWP. Currently being converted to hydrogen, but SMR could supplement. Remote location. Strong transmission to California markets."
  },
  {
    id: "r10", name: "Merom Generating Station", lat: 38.9494, lng: -87.5681, state: "IN",
    score: 77, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 200, estimatedCapacity: "300-500",
    retiringPlant: "Merom (1080 MW, retirement announced)",
    notes: "Near Wabash River. Hoosier Energy plant. Purdue study identified as suitable for SMR. Indiana actively exploring nuclear legislation. Existing transmission."
  },
  {
    id: "r11", name: "Rockport Plant", lat: 37.9256, lng: -87.0497, state: "IN",
    score: 76, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 250, estimatedCapacity: "300-600",
    retiringPlant: "Rockport (2600 MW, AEP Indiana)",
    notes: "Ohio River access. One of Indiana's largest coal plants. AEP exploring future options. Purdue study flagged as SMR candidate. Strong grid connections."
  },
  {
    id: "r12", name: "Paradise Fossil Plant", lat: 37.2503, lng: -86.9597, state: "KY",
    score: 75, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 200, estimatedCapacity: "300-500",
    retiringPlant: "Paradise (unit 3 retired 2020, remaining units retiring, 2558 MW total)",
    notes: "TVA plant on Green River. TVA already pursuing SMR at Clinch River — could expand to Paradise. Existing TVA transmission network. Kentucky exploring nuclear-friendly legislation."
  },
  {
    id: "r13", name: "Ghent Generating Station", lat: 38.7328, lng: -85.2219, state: "KY",
    score: 74, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 300, estimatedCapacity: "300-500",
    retiringPlant: "Ghent (2226 MW, Kentucky Utilities)",
    notes: "Ohio River access. Kentucky's largest coal plant. LG&E/KU exploring options. Strong grid connections serving Louisville metro area."
  },
  {
    id: "r14", name: "Gavin Plant", lat: 38.9325, lng: -82.1628, state: "OH",
    score: 76, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 400, estimatedCapacity: "400-600",
    retiringPlant: "Gavin (2600 MW, Ohio's largest coal plant)",
    notes: "Ohio River access. Ohio's largest coal plant. AEP Ohio considering future. Ohio passed nuclear-friendly HB6. Major transmission hub."
  },
  {
    id: "r15", name: "Comanche Generating Station", lat: 38.2200, lng: -104.6300, state: "CO",
    score: 73, type: "coal-retirement", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "low", populationNearby: 700, estimatedCapacity: "300-500",
    retiringPlant: "Comanche 3 (retiring 2031, 750 MW)",
    notes: "Near Pueblo, CO. Xcel Energy plant. Colorado growing more nuclear-friendly. Limited water but air-cooled SMR designs could work. Serves Colorado Springs and Pueblo."
  },
  {
    id: "r16", name: "Centralia Coal Plant", lat: 46.7458, lng: -122.8558, state: "WA",
    score: 72, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "moderate", populationNearby: 100, estimatedCapacity: "300-500",
    retiringPlant: "Centralia (last unit retiring 2025, 1460 MW)",
    notes: "Washington's only coal plant. TransAlta facility. Near Chehalis River. Pacific Northwest needs baseload. WA state has been resistant to nuclear but energy needs growing. Transmission to Portland and Seattle."
  },
  {
    id: "r17", name: "Sherburne County (Sherco)", lat: 45.3822, lng: -93.8872, state: "MN",
    score: 74, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 500, estimatedCapacity: "300-500",
    retiringPlant: "Sherco (units retiring 2026-2030, 2400 MW)",
    notes: "Xcel Energy's largest coal plant. Near Mississippi River. Minnesota growing more open to nuclear. Massive transmission serving Twin Cities metro. Xcel has expressed interest in advanced nuclear."
  },

  // ==========================================
  // EXISTING NUCLEAR EXPANSION
  // ==========================================
  {
    id: "n1", name: "Oak Ridge / Clinch River Area", lat: 35.9313, lng: -84.3108, state: "TN",
    score: 92, type: "existing-nuclear", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 800, estimatedCapacity: "300-600",
    notes: "Birthplace of nuclear energy. TVA deploying BWRX-300. Kairos Hermes demo nearby. Molten salt reactor heritage. World's densest concentration of nuclear expertise. Multiple reactors converging here."
  },
  {
    id: "n2", name: "Savannah River Site", lat: 33.3470, lng: -81.7365, state: "SC",
    score: 87, type: "existing-nuclear", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 400, estimatedCapacity: "300-600",
    notes: "DOE site with decades of nuclear operations. NRC-familiar area. Near Savannah River. SC exploring advanced reactor deployment. Strong nuclear workforce. Plutonium processing history."
  },
  {
    id: "n3", name: "Hanford Site", lat: 46.5500, lng: -119.5000, state: "WA",
    score: 78, type: "existing-nuclear", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "moderate", populationNearby: 250, estimatedCapacity: "300-500",
    notes: "Historic nuclear site (Manhattan Project). Near Columbia River. Massive DOE reservation. Cleanup ongoing but portions available for new reactors. Pacific Northwest needs clean baseload."
  },

  // ==========================================
  // HIGH-VALUE GREENFIELD
  // ==========================================
  {
    id: "g1", name: "Northern Virginia Data Center Corridor", lat: 39.0437, lng: -77.4875, state: "VA",
    score: 86, type: "greenfield", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 2500, estimatedCapacity: "600-1200",
    notes: "World's largest data center market. Dominion Energy grid strained. Amazon, Google, Microsoft all seeking nuclear PPAs. Near Potomac. Highest demand case in US. Data center power demand projected to triple by 2030."
  },
  {
    id: "g2", name: "Permian Basin Hub", lat: 31.9686, lng: -102.0779, state: "TX",
    score: 76, type: "greenfield", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "moderate", populationNearby: 350, estimatedCapacity: "300-600",
    notes: "Massive energy demand from oil/gas operations and growing data centers. Could power enhanced oil recovery. Water-cooled SMR challenging — air-cooled designs preferred. ERCOT needs reliability."
  },
  {
    id: "g3", name: "West Texas Wind Integration", lat: 32.4487, lng: -100.4500, state: "TX",
    score: 74, type: "greenfield", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "low", populationNearby: 150, estimatedCapacity: "300-500",
    notes: "SMR as baseload complement to massive wind farms. Stabilizes grid during low-wind periods. ERCOT needs reliability desperately."
  },
  {
    id: "g4", name: "Phoenix Metro — Palo Verde Expansion Area", lat: 33.3881, lng: -112.8614, state: "AZ",
    score: 79, type: "greenfield", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "low", populationNearby: 4000, estimatedCapacity: "300-600",
    notes: "Near Palo Verde (largest US nuclear plant). Arizona growing rapidly. Extreme heat = extreme electricity demand. APS exploring advanced nuclear. Existing nuclear workforce and expertise in region."
  },
  {
    id: "g5", name: "Central Georgia — Plant Vogtle Expansion", lat: 33.1415, lng: -81.7615, state: "GA",
    score: 82, type: "greenfield", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 500, estimatedCapacity: "300-600",
    notes: "Adjacent to Vogtle (newest US nuclear plant, units 3&4 online 2023-2024). Georgia Power has nuclear expertise. Near Savannah River. Strong political support. Could host SMRs alongside existing large reactors."
  },
  {
    id: "g6", name: "North Carolina — Duke Energy Territory", lat: 35.6350, lng: -79.7600, state: "NC",
    score: 77, type: "greenfield", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 1200, estimatedCapacity: "300-600",
    notes: "Duke Energy is one of the largest US utilities. NC passed nuclear-friendly legislation. Research Triangle area has massive data center growth. Duke already operates McGuire and Harris nuclear plants."
  },
];

// Stats
export const siteStats = {
  totalSites: smrSites.length,
  avgScore: Math.round(smrSites.reduce((a, s) => a + s.score, 0) / smrSites.length),
  confirmedProjects: smrSites.filter(s => s.type === "confirmed-project").length,
  coalRetirements: smrSites.filter(s => s.type === "coal-retirement").length,
  existingNuclear: smrSites.filter(s => s.type === "existing-nuclear").length,
  greenfield: smrSites.filter(s => s.type === "greenfield").length,
  highDemand: smrSites.filter(s => s.gridDemand === "high").length,
  totalCapacity: "8,000 - 15,000+ MW",
  statesCovered: [...new Set(smrSites.map(s => s.state))].length,
  nearCoalPct: Math.round((smrSites.filter(s => s.type === "coal-retirement").length / smrSites.length) * 100),
};
