"use client";

import Image from "next/image";
import { Linkedin, Github, Phone, ShieldCheck, ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 relative reveal-hidden"
    >
      <div
        className="absolute top-20 right-10 flex flex-col gap-4 reveal-item reveal-hidden"
        style={{ transitionDelay: "200ms" }}
      >
        <a
          href="https://linkedin.com/in/oluwaseun-okunola-168030a5"
          target="_blank"
          rel="noreferrer"
          className="p-2 glass rounded-full hover:text-blue-400 transition-all hover:scale-110"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/toamutiltech"
          target="_blank"
          rel="noreferrer"
          className="p-2 glass rounded-full hover:text-blue-400 transition-all hover:scale-110"
        >
          <Github size={20} />
        </a>
        <a
          href="https://wa.me/2348139669156"
          target="_blank"
          rel="noreferrer"
          className="p-2 glass rounded-full hover:text-green-400 transition-all hover:scale-110"
        >
          <Phone size={20} />
        </a>
      </div>

      <div
        className="group relative mb-12 animate-float reveal-item reveal-hidden"
        style={{ transitionDelay: "400ms" }}
      >
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
          <Image
            src="/images/oluwaseun.png"
            alt="Oluwaseun Adeolu Okunola"
            fill
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      <h1
        className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight leading-tight reveal-item reveal-hidden"
        style={{ transitionDelay: "600ms" }}
      >
        Oluwaseun Adeolu <span className="text-gradient">Okunola</span>
      </h1>
      <p
        className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl mb-8 font-light reveal-item reveal-hidden"
        style={{ transitionDelay: "800ms" }}
      >
        Software Engineer | <span className="text-blue-400">SaaS Product Builder</span> |{" "}
        <span className="text-purple-400">DevSecOps Specialist</span>
      </p>

      {/* Credential badge */}
      <div
        className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium reveal-item reveal-hidden"
        style={{ transitionDelay: "900ms" }}
      >
        <ShieldCheck size={16} />
        Google Cloud DevSecOps Certified — May 2026
      </div>

      <div className="flex gap-4 reveal-item reveal-hidden" style={{ transitionDelay: "1000ms" }}>
        <a
          href="#contact"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2"
        >
          Hire Me <ArrowRight size={18} />
        </a>
        <a
          href="/Oluwaseun-Adeolu-Okunola-International-CV.pdf"
          download
          className="px-8 py-3 glass hover:bg-white/10 rounded-full font-semibold transition-all flex items-center gap-2"
        >
          Resume <Download size={18} />
        </a>
      </div>
    </section>
  );
}
