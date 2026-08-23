"use client";

import { useState, useEffect } from "react";
import {
  Search,
  Command,
  FileText,
  Send,
  X,
  ExternalLink,
  Code,
  Award,
  User,
  Briefcase,
} from "lucide-react";
import { OVERLAY_BACKDROP, MODAL_CONTAINER } from "@/lib/styles";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Projects";
  icon: React.ReactNode;
  action: () => void;
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items: CommandItem[] = [
    {
      id: "nav-about",
      title: "Jump to About Section",
      category: "Navigation",
      icon: <User size={16} />,
      action: () => scrollTo("about"),
    },
    {
      id: "nav-skills",
      title: "Jump to Core Skills",
      category: "Navigation",
      icon: <Code size={16} />,
      action: () => scrollTo("skills"),
    },
    {
      id: "nav-experience",
      title: "Jump to Experience Timeline",
      category: "Navigation",
      icon: <Briefcase size={16} />,
      action: () => scrollTo("experience"),
    },
    {
      id: "nav-projects",
      title: "Jump to Selected Projects",
      category: "Navigation",
      icon: <Code size={16} />,
      action: () => scrollTo("projects"),
    },
    {
      id: "nav-certs",
      title: "Jump to Certifications",
      category: "Navigation",
      icon: <Award size={16} />,
      action: () => scrollTo("certifications"),
    },
    {
      id: "nav-contact",
      title: "Jump to Contact Form",
      category: "Navigation",
      icon: <Send size={16} />,
      action: () => scrollTo("contact"),
    },
    {
      id: "act-resume",
      title: "Download Resume (PDF)",
      category: "Actions",
      icon: <FileText size={16} />,
      action: () => downloadFile("/resume.pdf"),
    },
    {
      id: "act-whatsapp",
      title: "Open Direct WhatsApp Chat",
      category: "Actions",
      icon: <Send size={16} />,
      action: () => window.open("https://wa.me/2348139669156", "_blank"),
    },
  ];

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const downloadFile = (url: string) => {
    setIsOpen(false);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Oluwaseun_Okunola_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 glass px-4 py-2.5 rounded-full text-xs font-semibold text-slate-300 hover:text-white hover:border-blue-500/50 transition-all flex items-center gap-2 shadow-2xl group cursor-pointer"
        title="Open Command Palette (Cmd + K)"
      >
        <Command size={14} className="text-blue-400 group-hover:rotate-12 transition-transform" />
        <span>Command Palette</span>
        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-slate-400">⌘K</kbd>
      </button>
    );
  }

  return (
    <div className={OVERLAY_BACKDROP}>
      <div className={MODAL_CONTAINER}>
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            className="w-full bg-transparent text-white text-sm focus:outline-none placeholder-slate-500"
            placeholder="Type a command or search sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-6 text-center text-sm text-slate-500">
              No commands found matching &quot;{query}&quot;
            </div>
          ) : (
            filteredItems.map((item) => (
              <button
                key={item.id}
                onClick={item.action}
                className="w-full p-3 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between text-left group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <span className="p-2 glass rounded-lg text-blue-400 group-hover:text-blue-300">
                    {item.icon}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">{item.title}</div>
                    <div className="text-[11px] text-slate-500">{item.category}</div>
                  </div>
                </div>
                <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-300" />
              </button>
            ))
          )}
        </div>

        <div className="p-3 bg-white/5 border-t border-white/5 text-[11px] text-slate-500 flex justify-between items-center px-4">
          <span>Navigate with mouse or keyboard</span>
          <span>
            Press <kbd className="px-1 bg-white/10 rounded">ESC</kbd> to exit
          </span>
        </div>
      </div>
    </div>
  );
}
