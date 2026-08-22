'use client';

import { ShieldCheck, Briefcase, Layout, Globe } from "lucide-react";

export function About() {
  const STATS = [
    { label: "Experience", value: "5+ Years", icon: Briefcase },
    { label: "Production Projects", value: "10+", icon: Layout },
    { label: "Availability", value: "Full-time / Remote", icon: Globe },
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto reveal-hidden">
      <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ShieldCheck size={120} className="text-blue-500" />
        </div>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <UserIcon /> Professional Summary
        </h2>
        <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl">
          Software Engineer and Founder with over <span className="text-slate-100 font-semibold underline decoration-blue-500/50 underline-offset-4">5+ years</span> of experience designing, building, and deploying scalable SaaS platforms, ERP systems, and cloud-based applications. Proficient in React, Next.js, Vue.js, PHP, and Python. Experienced in AWS and Google Cloud deployments, Terraform IaC, Docker CI/CD pipelines, REST API design, and OWASP-aligned security. Proven track record of delivering production-ready solutions for businesses, educational institutions, NGOs, and commercial organizations. Certified Google Cloud DevSecOps Professional.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-white/5 border border-white/5 reveal-item reveal-hidden" style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
              <stat.icon className="text-blue-400 mb-4" size={24} />
              <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
              <div className="text-xl font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
