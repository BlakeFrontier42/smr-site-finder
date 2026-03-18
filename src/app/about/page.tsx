"use client";

import Link from "next/link";
import { Atom, ArrowLeft, Github, Twitter, Database, MapPin, Zap, Shield, Droplets, BarChart3 } from "lucide-react";
import { siteStats } from "@/data/sites";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Map
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Atom className="w-10 h-10 text-cyan-400" />
          <div>
            <h1 className="text-3xl font-bold text-white">SMR Site Finder</h1>
            <p className="text-slate-500">Where should America build its next nuclear reactors?</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none space-y-8">
          <div className="bg-[#0d1117] border border-cyan-900/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">What is this?</h2>
            <p className="text-slate-400 leading-relaxed">
              An interactive map of the most promising locations for Small Modular Reactor (SMR) deployment across the United States.
              Each site is scored 0-100 based on multiple factors including grid demand, water access for cooling, seismic risk,
              existing infrastructure, and proximity to population centers.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-amber-900/30 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">💡 Key Finding</h2>
            <p className="text-slate-400 leading-relaxed">
              <span className="text-amber-400 font-bold">{siteStats.nearCoalPct}% of optimal SMR sites are at retiring coal plants.</span> These
              sites already have transmission infrastructure rated for thousands of megawatts, switchyards, water access, and grid
              connections. Converting retiring coal plants to SMR sites could save billions in infrastructure costs while
              providing clean, reliable baseload power.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-4">Scoring Methodology</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: Zap, label: "Grid Demand", desc: "Regional electricity demand and growth projections (EIA data)", color: "text-red-400" },
                { icon: Droplets, label: "Water Access", desc: "Proximity to cooling water sources — rivers, lakes, coast", color: "text-blue-400" },
                { icon: Shield, label: "Seismic Risk", desc: "USGS seismic hazard assessment for site stability", color: "text-emerald-400" },
                { icon: MapPin, label: "Infrastructure", desc: "Existing grid connections, transmission lines, switchyards", color: "text-amber-400" },
                { icon: BarChart3, label: "Population", desc: "Balance of workforce access vs. safety buffer zones", color: "text-cyan-400" },
                { icon: Database, label: "Policy", desc: "State nuclear policy friendliness and permitting climate", color: "text-purple-400" },
              ].map((item, i) => (
                <div key={i} className="bg-[#0d1117] border border-slate-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-semibold text-slate-200">{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-white mb-3">Data Sources</h2>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>• <span className="text-slate-300">DOE Office of Nuclear Energy</span> — Advanced reactor deployment reports</li>
              <li>• <span className="text-slate-300">EIA (Energy Information Administration)</span> — Power plant retirement data, grid demand</li>
              <li>• <span className="text-slate-300">NRC (Nuclear Regulatory Commission)</span> — Licensing and site assessment criteria</li>
              <li>• <span className="text-slate-300">USGS</span> — Seismic hazard maps</li>
              <li>• <span className="text-slate-300">State energy commissions</span> — Nuclear policy and permitting data</li>
            </ul>
          </div>

          <div className="bg-[#0d1117] border border-slate-800/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-3">Stats</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-cyan-400">{siteStats.totalSites}</div>
                <div className="text-xs text-slate-500">Total Sites</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-400">{siteStats.coalRetirements}</div>
                <div className="text-xs text-slate-500">Coal Retirements</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">{siteStats.statesCovered}</div>
                <div className="text-xs text-slate-500">States</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">{siteStats.avgScore}</div>
                <div className="text-xs text-slate-500">Avg Score</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-6">
            <p className="text-sm text-slate-500">
              Built by <span className="text-cyan-400">Blake @ Frontier Labs</span> — exploring the intersection of AI, energy, and frontier technology.
            </p>
            <div className="flex gap-4 mt-3">
              <a href="https://x.com/BlakeFrontierLabs" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/BlakeFrontierLabs" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
