"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30 reveal-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-slate-400">
              Production-ready digital solutions across 10+ industries
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all reveal-item reveal-hidden"
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest text-blue-400 font-bold px-2 py-1 bg-blue-400/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-100 hover:text-blue-400 transition-colors"
                >
                  View Project <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
