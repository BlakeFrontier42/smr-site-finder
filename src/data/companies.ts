// Active SMR companies and their projects

export interface SMRCompany {
  name: string;
  reactor: string;
  type: string;
  capacity: string;
  status: string;
  timeline: string;
  location: string;
  funding: string;
  keyFact: string;
  website: string;
}

export const smrCompanies: SMRCompany[] = [
  {
    name: "NuScale Power",
    reactor: "VOYGR",
    type: "Light Water SMR",
    capacity: "77 MW per module (up to 924 MW)",
    status: "NRC Design Certified (Jan 2023) — First US SMR to achieve this",
    timeline: "First plant: late 2020s at INL, Idaho",
    location: "Idaho National Laboratory",
    funding: "$1.4B DOE cost-share + private investment",
    keyFact: "Only SMR with full NRC design certification. UAMPS project scaled back but technology proven.",
    website: "https://www.nuscalepower.com",
  },
  {
    name: "TerraPower",
    reactor: "Natrium",
    type: "Sodium-Cooled Fast Reactor + Molten Salt Storage",
    capacity: "345 MW electric (500 MW thermal)",
    status: "Construction permit under NRC review. Site prep underway.",
    timeline: "Operational target: 2030 in Kemmerer, Wyoming",
    location: "Kemmerer, Wyoming (former coal town)",
    funding: "$2B+ (DOE ARDP award + Gates-backed private funding)",
    keyFact: "Founded by Bill Gates. Built at retiring coal plant site. Integrated molten salt energy storage can flex to 500 MW during peak demand.",
    website: "https://www.terrapower.com",
  },
  {
    name: "X-energy",
    reactor: "Xe-100",
    type: "High-Temperature Gas-Cooled Reactor (HTGR) — Pebble Bed",
    capacity: "80 MW per module (320 MW four-pack)",
    status: "NRC licensing in progress. DOE ARDP awardee.",
    timeline: "First plant: ~2029 at Dow Chemical facility, Texas",
    location: "Seadrift, Texas (Dow Chemical industrial site)",
    funding: "$1.2B+ DOE ARDP + Dow partnership + private",
    keyFact: "TRISO fuel cannot melt down — inherently safe design. First industrial deployment providing process heat + electricity to chemical plant.",
    website: "https://x-energy.com",
  },
  {
    name: "Kairos Power",
    reactor: "Hermes / KP-FHR",
    type: "Fluoride Salt-Cooled High-Temperature Reactor",
    capacity: "Hermes demo: 35 MW thermal. Commercial: 140 MW electric",
    status: "Hermes construction permit approved (Dec 2023) — first new US reactor permit in 50 years",
    timeline: "Hermes demo: 2027 in Oak Ridge, TN. Commercial: early 2030s",
    location: "Oak Ridge, Tennessee",
    funding: "$629M DOE risk reduction award + Google PPA",
    keyFact: "Signed first-ever corporate nuclear PPA with Google for 500 MW. Uses molten fluoride salt coolant — low pressure, high safety margin.",
    website: "https://kairospower.com",
  },
  {
    name: "Oklo",
    reactor: "Aurora",
    type: "Fast Neutron Microreactor",
    capacity: "15 MW electric",
    status: "NRC combined license application submitted. Publicly traded (NYSE: OKLO)",
    timeline: "First unit: late 2020s at INL",
    location: "Idaho National Laboratory",
    funding: "Public company. Sam Altman (OpenAI CEO) is chairman.",
    keyFact: "Smallest commercial design. Can run 10+ years without refueling. Uses recycled nuclear fuel. Sam Altman-backed.",
    website: "https://oklo.com",
  },
  {
    name: "Holtec International",
    reactor: "SMR-300",
    type: "Pressurized Water Reactor",
    capacity: "300 MW electric",
    status: "Pre-application with NRC. Palisades plant restart underway.",
    timeline: "SMR deployment: early 2030s",
    location: "Palisades, Michigan (restarting shuttered nuclear plant) + Oyster Creek, NJ",
    funding: "$1.5B DOE loan for Palisades restart + private",
    keyFact: "Pioneering nuclear plant restarts — first company to revive a shuttered US nuclear plant. Palisades restart is a landmark event for the industry.",
    website: "https://holtecinternational.com",
  },
  {
    name: "GE Hitachi",
    reactor: "BWRX-300",
    type: "Boiling Water Reactor (simplified)",
    capacity: "300 MW electric",
    status: "Licensed in Canada. US NRC review underway.",
    timeline: "First North American unit: ~2029 in Ontario, Canada",
    location: "Darlington, Ontario (TVA also evaluating for Clinch River, TN)",
    funding: "Ontario Power Generation + TVA evaluation + private",
    keyFact: "10x simpler than conventional BWR. Uses natural circulation — no pumps needed for safety cooling. Tennessee Valley Authority evaluating for US deployment.",
    website: "https://www.gevernova.com/nuclear",
  },
];
