'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Mail, Code, Database, Server, Zap, Cloud, Phone,
  Linkedin, Github, ExternalLink, Download, ArrowRight,
  ShieldCheck, ShieldAlert, Layout,
  Globe, Award, Briefcase, GraduationCap, ChevronRight, Users,
  Menu, X
} from "lucide-react";

const PROJECTS = [
  {
    title: "Stockara",
    description: "Stockara is a modern web-based business management platform designed to help you efficiently manage your inventory, sales, and services from a single powerful system.",
    image: "/images/stockara.png",
    link: "https://www.getstockara.com.ng/",
    tags: ["React", "TypeScript", "Flask", "AWS"]
  },
  {
    title: "My Invoice System",
    description: "Cloud-ready SaaS invoicing and billing platform with multi-user RBAC, OWASP authentication, transaction management, and multi-device support.",
    image: "/images/MyInvoiceSystem.png",
    link: "https://myinvoicesystem.xyz",
    tags: ["PHP", "MySQL", "Docker", "OWASP"]
  },
  {
    title: "EduEntryShield",
    description: "Education security platform focused on identity verification and access control, reducing school impersonation incidents via biometric-ready system.",
    image: "/images/EduEntry-Shield.png",
    link: "https://eduentryshield.com.ng",
    tags: ["React", "PHP", "PyTest", "Security"]
  },
  {
    title: "Semptech Services Ltd",
    description: "Service-booking platform connecting 50+ vetted technicians to customers nationwide via responsive, AWS-deployed web application.",
    image: "/images/Semptech.png",
    link: "https://semptech.tech",
    tags: ["React", "Flask", "AWS", "Terraform"]
  },
  {
    title: "Amadi Amadi Consulting",
    description: "Corporate website for a licensed estate surveying & valuation firm. Responsive UI, secure hosting, and SEO-optimized architecture.",
    image: "/images/amadi.png",
    link: "https://amadiamadi.com",
    tags: ["PHP", "SEO", "Responsive"]
  },
  {
    title: "Toa Multi Tech",
    description: "Corporate technology services platform with scalable backend architecture and cloud-ready deployment.",
    image: "/images/Toa-Multi-Tech.png",
    link: "https://toamultitech.tech",
    tags: ["Architecture", "Docker", "GCP"]
  },
  {
    title: "Realtory ERP",
    description: "The most comprehensive real estate management solution for modern agencies. Simplify your operations today.",
    image: "/images/realtory.png",
    link: "https://realtoryerp.com.ng/",
    tags: ["PHP", "WordPress", "SEO"]
  },
  {
    title: "Evansville Youth Health Competitions",
    description: "Evansville Youth Health Competitions (EYHC) is Promoting healthy living and youth development through elite sports programs.",
    image: "/images/EYHC.png",
    link: "https://evansvilleyouthhealthcompetitions.com/",
    tags: ["PHP", "API", "SEO"]
  },
  {
    title: "Evansville Healthcare Foundation Worldwide",
    description: "Evansville Healthcare Foundation Worldwide (EHFW) is a non-profit, non-governmental organisation driven by a strong humanitarian mandate. ",
    image: "/images/Evansville.png",
    link: "https://ehfw.org/",
    tags: ["PHP", "WordPress", "SEO"]
  },
  {
    title: "CYMS",
    description: "The Committee of Youths on Mobilization and Sensitization (CYMS) is a dedicated umbrella for vibrant, energetic Nigerian youths committed to promoting national development.",
    image: "/images/CYMS.png",
    link: "https://cyms.org.ng/",
    tags: ["PHP", "WordPress", "SEO"]
  }
];

const SKILLS = {
  "Programming": ["JavaScript (ES6+)", "TypeScript", "PHP", "Python", "SQL", "C++", "C"],
  "Frontend": ["React.js", "Next.js", "Vue.js", "Angular", "Bootstrap", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend": ["Node.js", "Flask", "REST APIs", "MVC Architecture", "Auth & Authz"],
  "Architecture & SaaS": ["Software Architecture", "SaaS Development", "Enterprise Software", "ERP Development", "API Integration"],
  "CMS & Testing": ["WordPress", "Strapi", "PyTest", "Jest"],
  "Cloud & DevOps": ["AWS", "Google Cloud Platform", "Docker", "Terraform (IaC)", "CI/CD", "Git", "Linux", "Bash"],
  "DevSecOps": ["OWASP", "Secure SDLC", "Security as Code", "Policy as Code", "RBAC", "Zero Trust", "Risk Management"],
  "Databases": ["MySQL", "PostgreSQL", "SQLite", "DB Optimization"]
};

const EXPERIENCE = [
  {
    company: "Toa Multi Tech",
    role: "Founder & Lead Software Engineer",
    period: "September 2024 – Present",
    desc: "Lead a software engineering team delivering production-ready SaaS and enterprise platforms. Architected full-stack web apps using React, Next.js, and Flask REST APIs. Implemented Terraform IaC, Docker CI/CD pipelines, and OWASP-aligned security best practices."
  },
  {
    company: "Committee of Youth on Mobilization and Sensitization (CYMS)",
    role: "ICT Officer",
    period: "January 2026 – Present",
    desc: "Lead ICT strategy and digital transformation initiatives for a national youth-focused organization. Provide technical leadership on software systems, cloud services, cybersecurity, and IT operations."
  },
  {
    company: "La Colina Five Technologies",
    role: "Web Developer",
    period: "July 2018 – September 2025",
    desc: "Built full-stack web apps using PHP, Python, React, and Vue.js. Deployed WordPress CMS and custom backends. Migrated legacy applications to AWS with zero-downtime deployment strategies."
  },
  {
    company: "Faith Found Kiddies",
    role: "IT Support Specialist",
    period: "December 2023 – August 2024",
    desc: "Maintained school IT infrastructure including servers, networks, and security systems for 300+ users. Trained staff on cybersecurity awareness and OWASP best practices."
  },
  {
    company: "Tech Worth International",
    role: "IT Consultant (Seasonal)",
    period: "2020 – 2024",
    desc: "Delivered web and cloud consultancy covering AWS architecture, infrastructure analysis, and OWASP-aligned security assessments for SME and enterprise clients."
  }
];

const LEADERSHIP = {
  "Product Strategy & Engineering": [
    "Toa Multi Tech — Founder leading software architecture, full-stack development, and product delivery.",
    "EduEntryShield — Education security platform reducing impersonation and enhancing school safety.",
    "My Invoice System — Cloud-ready PHP invoicing platform with OWASP-aligned authentication.",
    "Bizapplive — Customer care application built with Python, Flask, REST APIs, and PyTest-tested backend."
  ],
  "Mentorship": "Actively mentor junior developers through code reviews focused on OWASP security, clean architecture, and career guidance.",
  "Thought Leadership": "Collaborate directly with business owners to transform operational challenges into scalable software solutions. Regularly share insights on software engineering, DevSecOps, and cloud infrastructure."
};

const CERTIFICATIONS = [
  { name: "Google Cloud DevSecOps Professional", date: "May 2026" },
  { name: "DNIIT CompTIA A+", date: "2015" },
  { name: "DNIIT CompTIA Network+", date: "2015" },
  { name: "DNIIT CompTIA Server+", date: "2015" },
  { name: "Diploma in Network & IT (DNIIT) — NIIT Abuja", date: "2015" },
  { name: "Full-Stack Web Development — La Colina Tech Hub", date: "2023" },
  { name: "Git — Simplilearn", date: "2023" },
  { name: "Scrum Basics — Mindluster", date: "2023" },
  { name: "DNIIT Windows Server Configuration & Administration", date: "2015" },
  { name: "HTML/CSS — TemplateMonster", date: "2019" },
  { name: "Mobile App Development - La Colina Tech Hub ", date: "2023" },
];

export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "2348139669156";
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
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between w-[90%] max-w-4xl px-6 py-3 glass rounded-full md:w-auto md:gap-8 text-sm font-medium">
        <div className="flex items-center md:hidden">
          <span className="text-gradient font-bold tracking-tighter">OLUWASEUN</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["About", "Skills", "Exp", "Leadership", "Projects", "Contact"].map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`transition-colors uppercase tracking-wider ${activeSection === id ? "text-blue-400" : "hover:text-blue-400"}`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-1 text-slate-100 focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 glass rounded-[2rem] p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-300 shadow-2xl">
            {["About", "Skills", "Exp", "Leadership", "Projects", "Contact"].map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors uppercase tracking-wider text-base py-2 border-b border-white/5 ${activeSection === id ? "text-blue-400" : "hover:text-blue-400"}`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
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
          <a href="https://wa.me/2348139669156" target="_blank" className="p-2 glass rounded-full hover:text-green-400 transition-all hover:scale-110">
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
          Oluwaseun Adeolu <span className="text-gradient">Okunola</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 text-center max-w-2xl mb-8 font-light reveal-item reveal-hidden" style={{ transitionDelay: '800ms' }}>
          Software Engineer | <span className="text-blue-400">SaaS Product Builder</span> | <span className="text-purple-400">DevSecOps Specialist</span>
        </p>

        {/* Credential badge */}
        <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium reveal-item reveal-hidden" style={{ transitionDelay: '900ms' }}>
          <ShieldCheck size={16} />
          Google Cloud DevSecOps Certified — May 2026
        </div>

        <div className="flex gap-4 reveal-item reveal-hidden" style={{ transitionDelay: '1000ms' }}>
          <a href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center gap-2">
            Hire Me <ArrowRight size={18} />
          </a>
          <a href="/Oluwaseun-Adeolu-Okunola-International-CV.pdf" download className="px-8 py-3 glass hover:bg-white/10 rounded-full font-semibold transition-all flex items-center gap-2">
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
            Software Engineer and Founder with over <span className="text-slate-100 font-semibold underline decoration-blue-500/50 underline-offset-4">5+ years</span> of experience designing, building, and deploying scalable SaaS platforms, ERP systems, and cloud-based applications. Proficient in React, Next.js, Vue.js, PHP, and Python. Experienced in AWS and Google Cloud deployments, Terraform IaC, Docker CI/CD pipelines, REST API design, and OWASP-aligned security. Proven track record of delivering production-ready solutions for businesses, educational institutions, NGOs, and commercial organizations. Certified Google Cloud DevSecOps Professional.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { label: "Experience", value: "5+ Years", icon: Briefcase },
              { label: "Production Projects", value: "10+", icon: Layout },
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

      {/* Leadership & Mentorship */}
      <section id="leadership" className="py-24 px-6 max-w-6xl mx-auto reveal-hidden">
        <h2 className="text-4xl font-bold mb-16 text-center">Leadership & Mentorship</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-10 rounded-3xl relative overflow-hidden group reveal-item reveal-hidden" style={{ transitionDelay: '200ms' }}>
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

          <div className="flex flex-col gap-8 reveal-item reveal-hidden" style={{ transitionDelay: '400ms' }}>
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

      {/* Projects Grid */}
      <section id="projects" className="py-24 px-6 bg-slate-900/30 reveal-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
              <p className="text-slate-400">Production-ready digital solutions across 10+ industries</p>
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
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-blue-400 font-bold px-2 py-1 bg-blue-400/10 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">{project.description}</p>
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
          <ul className="space-y-3">
            {CERTIFICATIONS.map((cert, i) => (
              <li key={i} className="flex items-start justify-between gap-4 text-slate-400 border-b border-white/5 pb-3">
                <div className="flex items-start gap-3">
                  <ChevronRight size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className={i === 0 ? "text-green-400 font-semibold" : ""}>{cert.name}</span>
                </div>
                <span className={`text-xs shrink-0 font-medium ${i === 0 ? "text-green-400" : "text-slate-500"}`}>{cert.date}</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-slate-950 border-t border-slate-900 reveal-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Great</h2>
          <p className="text-slate-400 mb-12">Available for freelance projects and full-time remote opportunities.</p>

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
              <div className="flex items-center gap-4">
                <div className="p-4 glass rounded-2xl text-blue-400"><Globe /></div>
                <div>
                  <div className="text-sm text-slate-500">Portfolio</div>
                  <div className="font-bold">oluwaseun.toamultitech.tech</div>
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
                Send via WhatsApp <ArrowRight size={18} />
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
        <p>&copy; {new Date().getFullYear()} Oluwaseun Adeolu Okunola. Full-Stack Web Developer & Cloud DevSecOps Specialist.</p>
      </footer>
    </div>
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

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
