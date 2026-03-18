// SMR Candidate Sites — compiled from DOE data, retiring coal plants, grid demand analysis
// Sources: EIA, DOE Office of Nuclear Energy, NRC, USGS

export interface SMRSite {
  id: string;
  name: string;
  lat: number;
  lng: number;
  state: string;
  score: number; // 0-100 suitability score
  type: "coal-retirement" | "brownfield" | "greenfield" | "existing-nuclear";
  gridDemand: "high" | "medium" | "low";
  waterAccess: "river" | "lake" | "coast" | "limited";
  seismicRisk: "low" | "moderate" | "high";
  populationNearby: number; // thousands within 50mi
  notes: string;
  retiringPlant?: string;
  estimatedCapacity: string; // MW
}

export const smrSites: SMRSite[] = [
  // === RETIRING COAL PLANT CONVERSIONS ===
  {
    id: "1", name: "Navajo Generating Station", lat: 36.9147, lng: -111.4558, state: "AZ",
    score: 88, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 180, estimatedCapacity: "600-900",
    retiringPlant: "Navajo GS (retired 2019, 2250 MW)",
    notes: "Existing grid infrastructure for 2250 MW. Near Lake Powell. Tribal consultation required. Massive transmission capacity already in place."
  },
  {
    id: "2", name: "San Juan Generating Station", lat: 36.8014, lng: -108.4381, state: "NM",
    score: 85, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 120, estimatedCapacity: "400-600",
    retiringPlant: "San Juan GS (retired 2022, 1848 MW)",
    notes: "Near San Juan River. Existing switchyard and transmission lines. Low seismic. NM actively exploring nuclear."
  },
  {
    id: "3", name: "Jim Bridger Plant", lat: 41.7683, lng: -108.8461, state: "WY",
    score: 82, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 35, estimatedCapacity: "300-500",
    retiringPlant: "Jim Bridger (partial retirement 2023-2028, 2120 MW)",
    notes: "Wyoming is most nuclear-friendly state. TerraPower Natrium project nearby. Low population density ideal for SMR."
  },
  {
    id: "4", name: "Intermountain Power Plant", lat: 39.5133, lng: -112.5553, state: "UT",
    score: 80, type: "coal-retirement", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "moderate", populationNearby: 15, estimatedCapacity: "300-500",
    retiringPlant: "Intermountain (retiring 2025, 1800 MW)",
    notes: "Major transmission hub serving LA DWP. Being converted to hydrogen, but SMR could supplement. Remote location."
  },
  {
    id: "5", name: "Laramie River Station", lat: 42.1547, lng: -104.8517, state: "WY",
    score: 84, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 90, estimatedCapacity: "300-500",
    retiringPlant: "Laramie River (phasing out 2025-2030, 1710 MW)",
    notes: "Near Laramie River. Wyoming pro-nuclear policy. Existing high-voltage transmission. Basin Electric exploring options."
  },
  {
    id: "6", name: "Martin Lake", lat: 32.2603, lng: -94.5703, state: "TX",
    score: 79, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 250, estimatedCapacity: "400-800",
    retiringPlant: "Martin Lake (potential retirement 2026-2030, 2250 MW)",
    notes: "ERCOT grid desperately needs baseload. Lake Martin nearby. Texas deregulated market = easier path. Massive demand growth from data centers."
  },
  {
    id: "7", name: "Gibson Generating Station", lat: 38.3656, lng: -87.7358, state: "IN",
    score: 81, type: "coal-retirement", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 300, estimatedCapacity: "400-600",
    retiringPlant: "Gibson (Indiana's largest coal plant, 3345 MW)",
    notes: "Near Wabash River. Largest coal plant in Indiana. Duke Energy exploring SMR options. Existing 3.3GW transmission infrastructure."
  },
  {
    id: "8", name: "Scherer Plant", lat: 33.0464, lng: -83.8236, state: "GA",
    score: 78, type: "coal-retirement", gridDemand: "high", waterAccess: "lake",
    seismicRisk: "low", populationNearby: 450, estimatedCapacity: "500-900",
    retiringPlant: "Plant Scherer (potential retirement, 3564 MW)",
    notes: "Largest coal plant in US. Near Lake Juliette. Georgia Power already operates Vogtle nuclear. Political support exists."
  },

  // === EXISTING NUCLEAR EXPANSION ===
  {
    id: "9", name: "INL — Idaho National Lab", lat: 43.5155, lng: -112.0353, state: "ID",
    score: 95, type: "existing-nuclear", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "moderate", populationNearby: 200, estimatedCapacity: "300-500",
    notes: "DOE's nuclear R&D headquarters. MARVEL microreactor already approved. Most SMR-ready site in America. NuScale VOYGR planned here."
  },
  {
    id: "10", name: "Oak Ridge National Lab", lat: 35.9313, lng: -84.3108, state: "TN",
    score: 90, type: "existing-nuclear", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 800, estimatedCapacity: "300-600",
    notes: "Birthplace of nuclear energy. TVA exploring SMR deployment. Molten salt reactor heritage. Near Clinch River — previous breeder reactor site."
  },
  {
    id: "11", name: "Savannah River Site", lat: 33.3470, lng: -81.7365, state: "SC",
    score: 87, type: "existing-nuclear", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 400, estimatedCapacity: "300-600",
    notes: "DOE site with decades of nuclear operations. NRC-familiar area. Near Savannah River. SC exploring advanced reactor deployment."
  },

  // === HIGH-VALUE GREENFIELD ===
  {
    id: "12", name: "Permian Basin Hub", lat: 31.9686, lng: -102.0779, state: "TX",
    score: 76, type: "greenfield", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "moderate", populationNearby: 350, estimatedCapacity: "300-600",
    notes: "Massive energy demand from oil/gas operations. Could power enhanced oil recovery and data centers. Water-cooled SMR challenging — air-cooled designs preferred."
  },
  {
    id: "13", name: "Northern Virginia Data Center Corridor", lat: 39.0437, lng: -77.4875, state: "VA",
    score: 83, type: "greenfield", gridDemand: "high", waterAccess: "river",
    seismicRisk: "low", populationNearby: 2500, estimatedCapacity: "600-1200",
    notes: "World's largest data center market. Dominion Energy grid strained. Amazon, Google, Microsoft all seeking nuclear PPAs. Near Potomac. Highest demand case in US."
  },
  {
    id: "14", name: "West Texas Wind Integration", lat: 32.4487, lng: -100.4500, state: "TX",
    score: 74, type: "greenfield", gridDemand: "high", waterAccess: "limited",
    seismicRisk: "low", populationNearby: 150, estimatedCapacity: "300-500",
    notes: "SMR as baseload complement to massive wind farms. Stabilizes grid during low-wind periods. ERCOT needs reliability."
  },
  {
    id: "15", name: "Colstrip Coal Complex", lat: 45.8842, lng: -106.6153, state: "MT",
    score: 80, type: "coal-retirement", gridDemand: "medium", waterAccess: "river",
    seismicRisk: "low", populationNearby: 45, estimatedCapacity: "300-500",
    retiringPlant: "Colstrip (units retiring 2025-2027, 2094 MW)",
    notes: "Major coal retirement. Near Yellowstone River. Low population. NorthWestern Energy exploring options. Transmission to Pacific Northwest."
  },
];

// Stats
export const siteStats = {
  totalSites: smrSites.length,
  avgScore: Math.round(smrSites.reduce((a, s) => a + s.score, 0) / smrSites.length),
  coalRetirements: smrSites.filter(s => s.type === "coal-retirement").length,
  existingNuclear: smrSites.filter(s => s.type === "existing-nuclear").length,
  greenfield: smrSites.filter(s => s.type === "greenfield").length,
  highDemand: smrSites.filter(s => s.gridDemand === "high").length,
  totalCapacity: "5,400 - 9,400 MW",
  statesCovered: [...new Set(smrSites.map(s => s.state))].length,
  nearCoalPct: Math.round((smrSites.filter(s => s.type === "coal-retirement").length / smrSites.length) * 100),
};
