"use client";

import Link from "next/link";
import { smrCompanies } from "@/data/companies";
import { ArrowLeft, Atom, ExternalLink, Zap, MapPin, Calendar, DollarSign, Lightbulb } from "lucide-react";

export default function Companies() {
  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Map
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <Atom className="w-8 h-8 text-cyan-400" />
          <h1 className="text-3xl font-bold text-white">SMR Companies</h1>
        </div>
        <p className="text-slate-500 mb-8">The companies building America&apos;s next generation of nuclear reactors</p>

        <div className="space-y-6">
          {smrCompanies.map((company, i) => (
            <div key={i} className="bg-[#0d1117] border border-cyan-900/30 rounded-xl p-6 hover:border-cyan-700/40 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-cyan-400">{company.name}</h2>
                  <p className="text-sm text-slate-400 mt-0.5">{company.reactor} — {company.type}</p>
                </div>
                <a href={company.website} target="_blank" rel="noopener noreferrer"
                  className="text-slate-600 hover:text-cyan-400 transition-colors flex-shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Capacity</p>
                    <p className="text-sm text-slate-300">{company.capacity}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Location</p>
                    <p className="text-sm text-slate-300">{company.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Timeline</p>
                    <p className="text-sm text-slate-300">{company.timeline}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Funding</p>
                    <p className="text-sm text-slate-300">{company.funding}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#0a0e17] border border-slate-800/50 rounded-lg p-3 mb-3">
                <p className="text-xs text-slate-500 uppercase mb-1">Status</p>
                <p className="text-sm text-slate-300">{company.status}</p>
              </div>

              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-400/80 italic">{company.keyFact}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800/50 pt-6 mt-8">
          <p className="text-sm text-slate-500">
            Built by <a href="https://x.com/BlakeFrontier42" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">@BlakeFrontier42</a>
          </p>
        </div>
      </div>
    </div>
  );
}
