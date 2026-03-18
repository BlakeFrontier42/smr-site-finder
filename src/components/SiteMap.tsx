"use client";

import { useEffect, useState } from "react";
import { smrSites, SMRSite } from "@/data/sites";

// Dynamic import needed for Leaflet (SSR incompatible)
let L: typeof import("leaflet") | null = null;
let MapContainer: typeof import("react-leaflet").MapContainer | null = null;
let TileLayer: typeof import("react-leaflet").TileLayer | null = null;
let CircleMarker: typeof import("react-leaflet").CircleMarker | null = null;
let Popup: typeof import("react-leaflet").Popup | null = null;
let Tooltip: typeof import("react-leaflet").Tooltip | null = null;

const typeColors: Record<string, string> = {
  "coal-retirement": "#f59e0b",
  "brownfield": "#8b5cf6",
  "greenfield": "#10b981",
  "existing-nuclear": "#06b6d4",
};

const typeLabels: Record<string, string> = {
  "coal-retirement": "Coal Retirement",
  "brownfield": "Brownfield",
  "greenfield": "Greenfield",
  "existing-nuclear": "Existing Nuclear",
};

interface SiteMapProps {
  selectedSite: SMRSite | null;
  onSelectSite: (site: SMRSite) => void;
  filter: string;
}

export default function SiteMap({ selectedSite, onSelectSite, filter }: SiteMapProps) {
  const [loaded, setLoaded] = useState(false);
  const [components, setComponents] = useState<{
    MapContainer: typeof import("react-leaflet").MapContainer;
    TileLayer: typeof import("react-leaflet").TileLayer;
    CircleMarker: typeof import("react-leaflet").CircleMarker;
    Popup: typeof import("react-leaflet").Popup;
    Tooltip: typeof import("react-leaflet").Tooltip;
  } | null>(null);

  useEffect(() => {
    Promise.all([
      import("leaflet"),
      import("react-leaflet"),
    ]).then(([leaflet, rl]) => {
      L = leaflet;
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
          const radius = 6 + (site.score / 20);
          return (
            <CM
              key={site.id}
              center={[site.lat, site.lng]}
              radius={isSelected ? radius + 4 : radius}
              fillColor={typeColors[site.type]}
              color={isSelected ? "#ffffff" : typeColors[site.type]}
              weight={isSelected ? 3 : 1.5}
              opacity={0.9}
              fillOpacity={isSelected ? 0.9 : 0.6}
              eventHandlers={{ click: () => onSelectSite(site) }}
            >
              <TT direction="top" offset={[0, -10]} className="custom-tooltip">
                <div className="bg-[#0d1117] text-slate-200 px-2 py-1 rounded text-xs border border-cyan-900/30">
                  <strong>{site.name}</strong> — Score: {site.score}
                </div>
              </TT>
              <P>
                <div className="min-w-[220px]">
                  <h3 className="text-cyan-400 font-bold text-sm mb-1">{site.name}</h3>
                  <p className="text-xs text-slate-400 mb-2">{site.state} · {typeLabels[site.type]}</p>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Score:</span>
                      <span className="text-cyan-400 font-bold">{site.score}/100</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Grid Demand:</span>
                      <span className="text-slate-300">{site.gridDemand}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Water:</span>
                      <span className="text-slate-300">{site.waterAccess}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Capacity:</span>
                      <span className="text-slate-300">{site.estimatedCapacity} MW</span>
                    </div>
                  </div>
                  {site.retiringPlant && (
                    <p className="text-xs text-amber-400 mt-2">⚡ {site.retiringPlant}</p>
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
