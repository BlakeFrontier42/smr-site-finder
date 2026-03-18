"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { smrSites, siteStats, SMRSite } from "@/data/sites";
import Link from "next/link";
import { Atom, MapPin, Zap, Droplets, Activity, TrendingUp, ChevronRight, Filter, X, BarChart3, Info } from "lucide-react";

const SiteMap = dynamic(() => import("@/components/SiteMap"), { ssr: false });

const typeColors: Record<string, string> = {
  "coal-retirement": "amber",
  "brownfield": "purple",
  "greenfield": "emerald",
  "existing-nuclear": "cyan",
};

const typeEmoji: Record<string, string> = {
  "coal-retirement": "🏭",
  "brownfield": "🏗️",
  "greenfield": "🌱",
  "existing-nuclear": "⚛️",
};

const typeLabels: Record<string, string> = {
  "coal-retirement": "Coal Retirement",
  "brownfield": "Brownfield",
  "greenfield": "Greenfield",
  "existing-nuclear": "Existing Nuclear",
};

const demandColors = { high: "text-red-400", medium: "text-amber-400", low: "text-emerald-400" };
const seismicColors = { low: "text-emerald-400", moderate: "text-amber-400", high: "text-red-400" };

export default function Home() {
  const [selectedSite, setSelectedSite] = useState<SMRSite | null>(null);
  const [filter, setFilter] = useState("all");
  const [showPanel, setShowPanel] = useState(true);

  const sorted = [...smrSites]
    .filter(s => filter === "all" || s.type === filter)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#0d1117] border-b border-cyan-900/30 px-4 py-3 flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex items-center gap-3">
          <Atom className="w-7 h-7 text-cyan-400" />
          <div>
            <h1 className="text-lg font-bold text-white">SMR Site Finder</h1>
            <p className="text-xs text-slate-500">Where should America build its next nuclear reactors?</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-cyan-400"><MapPin className="w-3.5 h-3.5" />{siteStats.totalSites} sites</div>
            <div className="flex items-center gap-1.5 text-amber-400"><Zap className="w-3.5 h-3.5" />{siteStats.totalCapacity}</div>
            <div className="flex items-center gap-1.5 text-emerald-400"><BarChart3 className="w-3.5 h-3.5" />Avg score: {siteStats.avgScore}</div>
          </div>
          <Link href="/companies" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors hidden sm:block">
            SMR Companies
          </Link>
          <Link href="/about" className="text-slate-500 hover:text-cyan-400 transition-colors">
            <Info className="w-5 h-5" />
          </Link>
          <button onClick={() => setShowPanel(!showPanel)}
            className="md:hidden bg-[#161b22] border border-slate-800 p-2 rounded-lg text-cyan-400">
            {showPanel ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${showPanel ? "w-80 lg:w-96" : "w-0"} flex-shrink-0 bg-[#0d1117] border-r border-cyan-900/30 flex flex-col overflow-hidden transition-all duration-300`}>
          {/* Filters */}
          <div className="p-3 border-b border-slate-800/50">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 uppercase tracking-wider">Filter by type</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <button onClick={() => setFilter("all")}
                className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${filter === "all" ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800/50 text-slate-500 hover:text-slate-300"}`}>
                All ({smrSites.length})
              </button>
              {Object.entries(typeLabels).map(([key, label]) => (
                <button key={key} onClick={() => setFilter(key)}
                  className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${filter === key ? "bg-cyan-500/20 text-cyan-400" : "bg-slate-800/50 text-slate-500 hover:text-slate-300"}`}>
                  {typeEmoji[key]} {label} ({smrSites.filter(s => s.type === key).length})
                </button>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="p-3 border-b border-slate-800/50">
            <div className="bg-amber-500/10 border border-amber-900/30 rounded-lg p-3">
              <p className="text-xs text-amber-400 font-semibold mb-1">💡 Key Finding</p>
              <p className="text-xs text-slate-400">{siteStats.nearCoalPct}% of optimal SMR sites are at retiring coal plants. The grid infrastructure is already there.</p>
            </div>
          </div>

          {/* Site List */}
          <div className="flex-1 overflow-y-auto">
            {sorted.map(site => (
              <button key={site.id} onClick={() => setSelectedSite(site)}
                className={`w-full text-left p-3 border-b border-slate-800/30 hover:bg-white/5 transition-colors ${selectedSite?.id === site.id ? "bg-cyan-500/5 border-l-2 border-l-cyan-400" : ""}`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-slate-200">{site.name}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-cyan-400">{site.score}</span>
                    <ChevronRight className="w-3 h-3 text-slate-700" />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500">{site.state}</span>
                  <span className="text-slate-700">·</span>
                  <span className="text-slate-500">{typeEmoji[site.type]} {typeLabels[site.type]}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-1 relative">
          <SiteMap selectedSite={selectedSite} onSelectSite={setSelectedSite} filter={filter} />

          {/* Watermark */}
          <div className="absolute bottom-4 right-4 bg-[#0d1117]/80 border border-slate-800/50 rounded-lg px-3 py-1.5 backdrop-blur z-[1000]">
            <a href="https://x.com/BlakeFrontier42" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-500 hover:text-cyan-400 transition-colors">
              Built by @BlakeFrontier42
            </a>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-[#0d1117]/90 border border-cyan-900/30 rounded-xl p-3 backdrop-blur z-[1000]">
            <p className="text-xs text-slate-500 mb-2 font-semibold uppercase tracking-wider">Site Types</p>
            <div className="space-y-1.5">
              {Object.entries(typeLabels).map(([key, label]) => (
                <div key={key} className="flex items-center gap-2 text-xs">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: key === "coal-retirement" ? "#f59e0b" : key === "greenfield" ? "#10b981" : key === "existing-nuclear" ? "#06b6d4" : "#8b5cf6" }} />
                  <span className="text-slate-400">{typeEmoji[key]} {label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Site Detail */}
          {selectedSite && (
            <div className="absolute top-4 right-4 w-80 bg-[#0d1117]/95 border border-cyan-900/30 rounded-xl p-4 backdrop-blur z-[1000] glow-cyan">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-cyan-400">{selectedSite.name}</h3>
                <button onClick={() => setSelectedSite(null)} className="text-slate-600 hover:text-slate-300">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Suitability Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full transition-all" style={{ width: `${selectedSite.score}%` }} />
                    </div>
                    <span className="text-cyan-400 font-bold">{selectedSite.score}/100</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1"><MapPin className="w-3 h-3" /> State</span>
                  <span className="text-slate-300">{selectedSite.state}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1"><Zap className="w-3 h-3" /> Grid Demand</span>
                  <span className={demandColors[selectedSite.gridDemand]}>{selectedSite.gridDemand.toUpperCase()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1"><Droplets className="w-3 h-3" /> Water Access</span>
                  <span className="text-slate-300">{selectedSite.waterAccess}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1"><Activity className="w-3 h-3" /> Seismic Risk</span>
                  <span className={seismicColors[selectedSite.seismicRisk]}>{selectedSite.seismicRisk.toUpperCase()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Est. Capacity</span>
                  <span className="text-slate-300">{selectedSite.estimatedCapacity} MW</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Population (50mi)</span>
                  <span className="text-slate-300">{selectedSite.populationNearby}k</span>
                </div>

                {selectedSite.retiringPlant && (
                  <div className="bg-amber-500/10 border border-amber-900/30 rounded-lg p-2 mt-2">
                    <p className="text-amber-400 font-semibold mb-0.5">⚡ Retiring Plant</p>
                    <p className="text-slate-400">{selectedSite.retiringPlant}</p>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/50">
                  <p className="text-slate-400 leading-relaxed">{selectedSite.notes}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
