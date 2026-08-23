"use client";

import { EXPERIENCE } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="exp" className="py-24 px-6 max-w-4xl mx-auto reveal-hidden">
      <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
        {EXPERIENCE.map((exp, i) => (
          <div
            key={exp.company}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal-item reveal-hidden"
            style={{ transitionDelay: `${(i + 1) * 200}ms` }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:animate-ping" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass hover:border-blue-500/20 transition-all">
              <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
                <div className="font-bold text-lg text-slate-100">{exp.role}</div>
                <time className="text-sm font-medium text-blue-400">{exp.period}</time>
              </div>
              <div className="text-slate-400 mb-4 font-semibold">{exp.company}</div>
              <div className="text-slate-400 text-sm leading-relaxed">{exp.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
