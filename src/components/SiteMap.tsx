"use client";

import { useEffect, useState } from "react";
import { smrSites, SMRSite } from "@/data/sites";

const typeColors: Record<string, string> = {
  "coal-retirement": "#f59e0b",
  "brownfield": "#8b5cf6",
  "greenfield": "#10b981",
  "existing-nuclear": "#06b6d4",
  "confirmed-project": "#ef4444",
};

const typeLabels: Record<string, string> = {
  "coal-retirement": "Coal Retirement",
  "brownfield": "Brownfield",
  "greenfield": "Greenfield",
  "existing-nuclear": "Existing Nuclear",
  "confirmed-project": "Confirmed Project",
};

interface SiteMapProps {
  selectedSite: SMRSite | null;
  onSelectSite: (site: SMRSite) => void;
  filter: string;
}

export default function SiteMap({ selectedSite, onSelectSite, filter }: SiteMapProps) {
  const [loaded, setLoaded] = useState(false);
  const [components, setComponents] = useState<any>(null);

  useEffect(() => {
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
    ]).then(([leaflet, rl]) => {
      setComponents({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        CircleMarker: rl.CircleMarker,
        Popup: rl.Popup,
        Tooltip: rl.Tooltip,
      });
      setLoaded(true);
    });
  }, []);

  if (!loaded || !components) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0a0e17]">
        <div className="text-cyan-400 animate-pulse">Loading map...</div>
      </div>
    );
  }

  const { MapContainer: MC, TileLayer: TL, CircleMarker: CM, Popup: P, Tooltip: TT } = components;
  const filtered = filter === "all" ? smrSites : smrSites.filter(s => s.type === filter);

  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      <MC center={[39.5, -98.35]} zoom={5} className="w-full h-full" zoomControl={true} scrollWheelZoom={true}>
        <TL
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filtered.map((site) => {
          const isSelected = selectedSite?.id === site.id;
          const radius = site.type === "confirmed-project" ? 10 + (site.score / 25) : 6 + (site.score / 20);
          return (
            <CM
              key={site.id}
              center={[site.lat, site.lng]}
              radius={isSelected ? radius + 4 : radius}
              fillColor={typeColors[site.type]}
              color={isSelected ? "#ffffff" : typeColors[site.type]}
              weight={isSelected ? 3 : site.type === "confirmed-project" ? 2.5 : 1.5}
              opacity={0.9}
              fillOpacity={isSelected ? 0.9 : site.type === "confirmed-project" ? 0.8 : 0.6}
              eventHandlers={{ click: () => onSelectSite(site) }}
            >
              <TT direction="top" offset={[0, -10]}>
                <div style={{ background: "#0d1117", color: "#e2e8f0", padding: "4px 8px", borderRadius: "6px", fontSize: "12px", border: "1px solid rgba(6,182,212,0.3)" }}>
                  <strong>{site.name}</strong> — Score: {site.score}
                  {site.company && <><br/><span style={{ color: "#94a3b8" }}>{site.company}</span></>}
                </div>
              </TT>
              <P>
                <div style={{ minWidth: "240px", maxWidth: "320px" }}>
                  <h3 style={{ color: typeColors[site.type], fontWeight: "bold", fontSize: "14px", marginBottom: "4px" }}>{site.name}</h3>
                  <p style={{ fontSize: "11px", color: "#94a3b8", marginBottom: "8px" }}>{site.state} · {typeLabels[site.type]}</p>
                  <div style={{ fontSize: "11px", lineHeight: "1.6" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Score:</span>
                      <span style={{ color: "#06b6d4", fontWeight: "bold" }}>{site.score}/100</span>
                    </div>
                    {site.company && (
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "#64748b" }}>Company:</span>
                        <span style={{ color: "#e2e8f0" }}>{site.company}</span>
                      </div>
                    )}
                    {site.reactor && (
                      <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span style={{ color: "#64748b" }}>Reactor:</span>
                        <span style={{ color: "#e2e8f0" }}>{site.reactor}</span>
                      </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Capacity:</span>
                      <span style={{ color: "#e2e8f0" }}>{site.estimatedCapacity} MW</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Grid Demand:</span>
                      <span style={{ color: "#e2e8f0" }}>{site.gridDemand}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Water:</span>
                      <span style={{ color: "#e2e8f0" }}>{site.waterAccess}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "#64748b" }}>Seismic:</span>
                      <span style={{ color: site.seismicRisk === "low" ? "#10b981" : site.seismicRisk === "moderate" ? "#f59e0b" : "#ef4444" }}>{site.seismicRisk}</span>
                    </div>
                  </div>
                  {site.retiringPlant && (
                    <p style={{ fontSize: "11px", color: "#f59e0b", marginTop: "6px" }}>⚡ {site.retiringPlant}</p>
                  )}
                  {site.timeline && (
                    <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>📅 {site.timeline}</p>
                  )}
                </div>
              </P>
            </CM>
          );
        })}
      </MC>
    </>
  );
}
