'use client';

import { useState } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: string | React.ReactNode;
}

export function DevTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'welcome',
      output: 'Oluwaseun Okunola Shell [Version 1.0.2]\nType "help" to view available developer commands.',
    },
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let outputText: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        outputText = 'Available Commands:\n  whoami    - Executive Summary\n  skills    - Core Technical Stack\n  projects  - Featured Production Applications\n  contact   - WhatsApp & Email Contacts\n  clear     - Clear terminal buffer';
        break;
      case 'whoami':
        outputText = 'Oluwaseun Adeolu Okunola | Senior Full-Stack Engineer & DevSecOps Specialist with 5+ years experience building SaaS applications.';
        break;
      case 'skills':
        outputText = 'Languages: TypeScript, JavaScript, PHP, SQL\nFrontend: React.js, Next.js, Tailwind CSS\nBackend: Node.js, Express, REST APIs\nDevSecOps/Cloud: AWS, Google Cloud, Docker, Vitest, CI/CD';
        break;
      case 'projects':
        outputText = 'Selected Deployments:\n 1. CrownQuest POS & Inventory System\n 2. Stockara Desktop POS\n 3. EduEntryShield Security Portal\n 4. Covenant School of the Spirit LMS';
        break;
      case 'contact':
        outputText = 'Email: oluwaseunokunola@gmail.com\nWhatsApp/Phone: +234 809 392 4896\nWeb: https://oluwaseun.toamultitech.tech';
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        outputText = `Command not recognized: "${cmd}". Type "help" for a list of available commands.`;
    }

    setHistory((prev) => [...prev, { command: input, output: outputText }]);
    setInput('');
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 glass p-3.5 rounded-full text-slate-300 hover:text-white hover:border-blue-500/50 transition-all shadow-2xl group flex items-center gap-2 text-xs font-semibold"
        title="Open Developer Terminal Widget"
      >
        <TerminalIcon size={16} className="text-green-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Dev Terminal</span>
      </button>
    );
  }

  return (
    <div
      className={`fixed z-50 bottom-6 right-6 glass border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${
        isExpanded ? 'w-[calc(100vw-3rem)] max-w-3xl h-[500px]' : 'w-80 sm:w-96 h-80'
      }`}
    >
      <div className="bg-slate-900/90 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-green-400" />
          <span className="text-xs font-mono font-bold text-slate-300">bash — dev@oluwaseun:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400">
          <button onClick={() => setIsExpanded(!isExpanded)} className="hover:text-white p-1">
            {isExpanded ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:text-white p-1">
            <X size={14} />
          </button>
        </div>
      </div>

      <div className="flex-1 p-3 overflow-y-auto font-mono text-xs space-y-3 bg-slate-950/90 text-slate-300">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2 text-green-400">
              <span>$</span>
              <span className="text-white">{item.command}</span>
            </div>
            <pre className="whitespace-pre-wrap text-slate-400 font-mono text-[11px] leading-relaxed">
              {item.output}
            </pre>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="p-2 bg-slate-900/60 border-t border-white/10 flex items-center gap-2">
        <span className="text-green-400 font-mono text-xs pl-2">$</span>
        <input
          type="text"
          className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-slate-600"
          placeholder="Type command ('help')..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}
