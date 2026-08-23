"use client";

import { Users, Award, ChevronRight, Globe } from "lucide-react";
import { LEADERSHIP } from "@/data/leadership";

export function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 max-w-6xl mx-auto reveal-hidden">
      <h2 className="text-4xl font-bold mb-16 text-center">Leadership & Mentorship</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="glass-card p-10 rounded-3xl relative overflow-hidden group reveal-item reveal-hidden"
          style={{ transitionDelay: "200ms" }}
        >
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <Users size={120} className="text-blue-500" />
          </div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
            <Award size={24} /> Product Strategy & Engineering
          </h3>
          <ul className="space-y-4">
            {LEADERSHIP["Product Strategy & Engineering"].map((item, i) => (
              <li key={i} className="flex gap-3 text-slate-400">
                <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col gap-8 reveal-item reveal-hidden"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
              <Users size={20} /> Mentorship
            </h3>
            <p className="text-slate-400 leading-relaxed">{LEADERSHIP.Mentorship}</p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <Globe size={20} /> Thought Leadership
            </h3>
            <p className="text-slate-400 leading-relaxed">{LEADERSHIP["Thought Leadership"]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
