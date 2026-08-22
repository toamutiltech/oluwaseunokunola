'use client';

import { useState, useEffect } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { ExperienceSection } from "@/components/sections/Experience";
import { Leadership } from "@/components/sections/Leadership";
import { ProjectsSection } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          if (entry.target.id) setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const timer = setTimeout(() => {
      document.querySelectorAll("section[id], .reveal-item").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-slate-100 selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(circle 800px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.15), transparent 80%)`
          }}
        />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Hero />
      <About />
      <Skills />
      <ExperienceSection />
      <Leadership />
      <ProjectsSection />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
