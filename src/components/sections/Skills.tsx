'use client';

import { Code, Layout, Server, Zap, Cloud, ShieldAlert, Database } from "lucide-react";
import { SKILLS } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50 reveal-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Core Technical Expertise</h2>
          <p className="text-slate-400">A comprehensive toolkit for modern, secure application delivery</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items], i) => (
            <div key={category} className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors group reveal-item reveal-hidden" style={{ transitionDelay: `${(i + 1) * 150}ms` }}>
              <h3 className="text-xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                <SkillIcon category={category} /> {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-md text-sm text-slate-300 group-hover:bg-blue-500/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ category }: { category: string }) {
  switch (category) {
    case "Programming": return <Code size={20} />;
    case "Frontend": return <Layout size={20} />;
    case "Backend": return <Server size={20} />;
    case "CMS & Testing": return <Zap size={20} />;
    case "Cloud & DevOps": return <Cloud size={20} />;
    case "DevSecOps": return <ShieldAlert size={20} />;
    case "Databases": return <Database size={20} />;
    default: return <Zap size={20} />;
  }
}
