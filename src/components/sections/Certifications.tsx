"use client";

import { Award, GraduationCap, ChevronRight } from "lucide-react";
import { CERTIFICATIONS } from "@/data/certifications";

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-24 reveal-hidden"
    >
      <div>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <Award className="text-blue-400" /> Certifications
        </h2>
        <ul className="space-y-3">
          {CERTIFICATIONS.map((cert, i) => (
            <li
              key={cert.name}
              className="flex items-start justify-between gap-4 text-slate-400 border-b border-white/5 pb-3"
            >
              <div className="flex items-start gap-3">
                <ChevronRight size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <span className={i === 0 ? "text-green-400 font-semibold" : ""}>{cert.name}</span>
              </div>
              <span
                className={`text-xs shrink-0 font-medium ${i === 0 ? "text-green-400" : "text-slate-500"}`}
              >
                {cert.date}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
          <GraduationCap className="text-purple-400" /> Education
        </h2>
        <div className="glass p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-2">B.Sc. Computer Science</h3>
          <p className="text-slate-400 mb-1">Esae Benin University, Cotonou, Benin Republic</p>
          <p className="text-sm text-purple-400 font-medium">Graduated 2021</p>
        </div>
      </div>
    </section>
  );
}
