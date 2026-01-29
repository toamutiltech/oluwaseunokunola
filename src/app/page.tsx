'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail, Code, Database, Server, Zap, Cloud, Phone,
  Linkedin, Github, ExternalLink, Download, ArrowRight,
  ShieldCheck, ShieldAlert, Layout,
  Globe, Award, Briefcase, GraduationCap, ChevronRight, Users
} from "lucide-react";

const PROJECTS = [
  {
    title: "Amadi Amadi Consulting",
    description: "Corporate website for a licensed estate surveying & valuation firm. Responsive UI, secure hosting, and SEO optimized architecture.",
    image: "/images/amadi.png", // Assuming path exists or will be updated
    link: "https://amadiamadi.com",
    tags: ["PHP", "SEO", "Responsive"]
  },
  {
    title: "My Invoice System",
    description: "Cloud-ready invoicing and billing platform with authentication, transaction management, and multi-device support.",
    image: "/images/MyInvoiceSystem.png", // Reusing or updating
    link: "https://myinvoicesystem.xyz",
    tags: ["PHP", "MySQL", "Authentication"]
  },
  {
    title: "Access Book Shop & Stationeries",
    description: "Full-stack e-commerce platform with React (TypeScript) frontend and Flask REST API backend.",
    image: "/images/Access-Book-Shop-and-Stationaries.png",
    link: "https://accessbookshopandstationaries.com.ng",
    tags: ["React", "Flask", "E-commerce"]
  },
  {
    title: "Abuja IT Support",
    description: "Business website built with PHP, optimized for performance and usability.",
    image: "/images/Abuja-IT-Support.png",
    link: "https://abujaitsupport.com",
    tags: ["PHP", "Performance"]
  },
  {
    title: "Toa Multi Tech",
    description: "Corporate technology services platform with scalable backend architecture.",
    image: "/images/Toa-Multi-Tech.png", // Representing the corp site
    link: "https://toamultitech.tech",
    tags: ["Architecture", "Backend"]
  },
  {
    title: "EduEntryShield",
    description: "Education security platform focused on identity verification and access control.",
    image: "/images/EduEntry-Shield.png",
    link: "https://eduentryshield.toamultitech.tech",
    tags: ["Security", "Identity"]
  },
  {
    title: "Semptech Services Ltd",
    description: "Service-booking platform connecting vetted technicians to customers nationwide..",
    image: "/images/Semptech.png",
    link: "https://semptech.tech",
    tags: ["Service-booking", "Technicians"]
  }
];

const SKILLS = {
  "Programming": ["JavaScript (ES6+)", "PHP", "Python", "C++", "C"],
  "Frontend": ["React.js", "Next.js", "Vue.js", "Angular", "HTML5", "CSS3"],
  "Backend": ["Flask", "REST APIs", "MVC Architecture", "Auth & Authz"],
  "Cloud & DevOps": ["AWS/GCP", "CI/CD", "Docker", "Git", "Linux Admin", "IaC"],
  "DevSecOps": ["Secure SDLC", "Security as Code", "Policy as Code", "Risk Management"],
  "Databases": ["MySQL", "PostgreSQL", "SQLite", "DB Optimization"]
};

const EXPERIENCE = [
  {
    company: "Toa Multi Tech",
    role: "Lead Software Engineer",
    period: "2025 – Present",
    desc: "Lead full stack software development and cloud deployment for international-ready digital products. Design system architecture, RESTful APIs, and database schemas following scalability and security best practices."
  },
  {
    company: "La Colina Five Technologies",
    role: "Software / Web Developer",
    period: "2018 – 2025",
    desc: "Developed and maintained full stack web applications. Administered Linux and Windows servers. Built and maintained CI/CD pipelines with Infrastructure as Code (IaC) principles."
  },
  {
    company: "Faith Found Kiddies",
    role: "IT Support Specialist",
    period: "2023 – 2024",
    desc: "Maintained school IT infrastructure including servers, networks, and CCTV systems."
  },
  {
    company: "Computer Engineer / Technician",
    role: "IT Professional",
    period: "2015 – 2018",
    desc: "Provided technical support for computers, printers, and networks. Repaired and maintained systems across multiple office environments."
  }
];

const LEADERSHIP = {
  "Team Leadership": [
    "EduEntryShield — Education security platform reducing impersonation and enhancing school safety.",
    "My Invoice System — Automated PHP-based invoicing and billing platform.",
    "Bizapplive — Customer care application built with Python, JavaScript, and Flask."
  ],
  "Mentorship": "Actively mentor junior developers through code reviews, best practices, and career guidance.",
  "Thought Leadership": "Regularly share insights on software engineering, databases, and leadership via LinkedIn."
};

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

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

    // Give a small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      document.querySelectorAll("section[id], .reveal-item").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [mounted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "2348093924896";
    const message = `Hello, my name is ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

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

      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-8 text-sm font-medium">
        {["About", "Skills", "Exp", "Leadership", "Projects", "Contact"].map((item) => {
          const id = item.toLowerCase();
          return (
            <a
              key={item}
              href={`#${id}`}
              className={`transition-colors uppercase tracking-wider ${activeSection === id ? "text-blue-400" : "hover:text-blue-400"
                }`}
            >
              {item}
            </a>
          );
        })}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-6 relative reveal-hidden">
        <div className="absolute top-20 right-10 flex flex-col gap-4 reveal-item reveal-hidden" style={{ transitionDelay: '200ms' }}>
          <a href="https://linkedin.com/in/oluwaseun-okunola-168030a5" target="_blank" className="p-2 glass rounded-full hover:text-blue-400 transition-all hover:scale-110">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com/toamutiltech" target="_blank" className="p-2 glass rounded-full hover:text-blue-400 transition-all hover:scale-110">
            <Github size={20} />
          </a>
          <a href="https://wa.me/2348093924896" target="_blank" className="p-2 glass rounded-full hover:text-green-400 transition-all hover:scale-110">
            <Phone size={20} />
          </a>
        </div>

        <div className="group relative mb-12 animate-float reveal-item reveal-hidden" style={{ transitionDelay: '400ms' }}>
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-white/20">
            <Image
              src="/images/oluwaseun.png"
              alt="Oluwaseun"
              fill
              className="object-cover scale-110 group-hover:scale-100 transition-transform duration-500"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight leading-tight reveal-item reveal-hidden" style={{ transitionDelay: '600ms' }}>
          Oluwaseun <span className="text-gradient">Okunola</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl mb-8 font-light reveal-item reveal-hidden" style={{ transitionDelay: '800ms' }}>
          Software Engineer | <span className="text-blue-400">Cloud</span> & <span className="text-purple-400">DevSecOps</span> Specialist
        </p>

        <div className="flex gap-4 reveal-item reveal-hidden" style={{ transitionDelay: '1000ms' }}>
          <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2">
            Hire Me <ArrowRight size={18} />
          </a>
          <a href="/OLUWASEUN_ADEOLU_OKUNOLA_CV.pdf" download className="px-8 py-3 glass hover:bg-white/10 rounded-full font-semibold transition-all flex items-center gap-2">
            Resume <Download size={18} />
          </a>
        </div>
      </section>

      {/* Summary / About */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto reveal-hidden">
        <div className="glass-card p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <ShieldCheck size={120} className="text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <UserIcon /> Professional Summary
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-4xl">
            ATS optimized Software Engineer, Cloud Engineer, and DevSecOps Specialist with <span className="text-slate-100 font-semibold underline decoration-blue-500/50 underline-offset-4">5+ years</span> of professional experience delivering scalable, secure, and high availability systems. Strong background in full stack development, cloud infrastructure, CI/CD automation, and cybersecurity best practices.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Experience", value: "5+ Years", icon: Briefcase },
              { label: "Completed Projects", value: "20+", icon: Layout },
              { label: "Availability", value: "Full-time / Remote", icon: Globe },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 reveal-item reveal-hidden" style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
                <stat.icon className="text-blue-400 mb-4" size={24} />
                <div className="text-sm text-slate-500 mb-1">{stat.label}</div>
                <div className="text-xl font-bold">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-900/50 reveal-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold mb-4">Core Technical Expertise</h2>
            <p className="text-slate-400">A comprehensive toolkit for modern application delivery</p>
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

      {/* Experience Timeline */}
      <section id="exp" className="py-24 px-6 max-w-4xl mx-auto reveal-hidden">
        <h2 className="text-4xl font-bold mb-16 text-center">Professional Journey</h2>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
          {EXPERIENCE.map((exp, i) => (
            <div key={exp.company} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal-item reveal-hidden" style={{ transitionDelay: `${(i + 1) * 200}ms` }}>
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-800 bg-slate-900 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-blue-500 group-hover:animate-ping" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl glass hover:border-blue-500/20 transition-all">
                <div className="flex items-center justify-between mb-1">
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

      {/* Leadership & Mentorship */}
      <section id="leadership" className="py-24 px-6 max-w-6xl mx-auto reveal-hidden">
        <h2 className="text-4xl font-bold mb-16 text-center">Leadership & Mentorship</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-3xl relative overflow-hidden group reveal-item reveal-hidden" style={{ transitionDelay: '200ms' }}>
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={120} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
              <Award size={24} /> Team Leadership
            </h3>
            <ul className="space-y-4">
              {LEADERSHIP["Team Leadership"].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-400">
                  <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8 reveal-item reveal-hidden" style={{ transitionDelay: '400ms' }}>
            <div className="glass-card p-8 rounded-2xl hover:border-purple-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
                <Users size={20} /> Mentorship
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {LEADERSHIP.Mentorship}
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover:border-blue-500/30 transition-colors">
              <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                <Globe size={20} /> Thought Leadership
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {LEADERSHIP["Thought Leadership"]}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30 reveal-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
              <p className="text-slate-400">A showcase of production-ready digital solutions</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i} className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all reveal-item reveal-hidden" style={{ transitionDelay: `${(i + 1) * 150}ms` }}>
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
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-blue-400 font-bold px-2 py-1 bg-blue-400/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <a href={project.link} target="_blank" className="inline-flex items-center gap-2 text-sm font-bold text-slate-100 hover:text-blue-400 transition-colors">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Education */}
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-24 reveal-hidden">
        <div>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Award className="text-blue-400" /> Certifications
          </h2>
          <ul className="space-y-4">
            {[
              "CompTIA A+, Network+, Server+",
              "NIIT Diploma in Network & IT (DNIIT)",
              "Windows Server Admin (Microsoft)",
              "Full Stack Web Development (La Colina)",
              "DevSecOps Specialist (Google Cloud)"
            ].map((cert, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-400">
                <ChevronRight size={16} className="text-blue-500" /> {cert}
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
            <p className="text-slate-400 mb-1">Esae Benin University, Cotonou</p>
            <p className="text-sm text-purple-400 font-medium">Graduated 2021</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-950 border-t border-slate-900 reveal-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Secure</h2>
          <p className="text-slate-400 mb-12">I&apos;m currently available for freelance projects and full-time opportunities.</p>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 glass rounded-2xl text-blue-400"><Mail /></div>
                <div>
                  <div className="text-sm text-slate-500">Email Me</div>
                  <div className="font-bold">oluwaseunokunola@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 glass rounded-2xl text-green-400"><Phone /></div>
                <div>
                  <div className="text-sm text-slate-500">Call / WhatsApp</div>
                  <div className="font-bold">+234 809 392 4896</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required
              />
              <input
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required
              />
              <textarea
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
                name="message" placeholder="Project Details" rows={4} value={form.message} onChange={handleChange} required
              />
              <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 text-center text-slate-500 text-sm border-t border-slate-900">
        <div className="flex justify-center gap-6 mb-8 uppercase tracking-widest font-bold text-xs">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Oluwaseun Adeolu Okunola. Professional Software Engineering.</p>
      </footer>
    </div>
  );
}

function SkillIcon({ category }: { category: string }) {
  switch (category) {
    case "Programming": return <Code size={20} />;
    case "Frontend": return <Layout size={20} />;
    case "Backend": return <Server size={20} />;
    case "Cloud & DevOps": return <Cloud size={20} />;
    case "DevSecOps": return <ShieldAlert size={20} />;
    case "Databases": return <Database size={20} />;
    default: return <Zap size={20} />;
  }
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
