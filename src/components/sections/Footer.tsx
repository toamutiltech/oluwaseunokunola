'use client';

export function Footer() {
  return (
    <footer className="py-12 px-6 text-center text-slate-500 text-sm border-t border-slate-900">
      <div className="flex justify-center gap-6 mb-8 uppercase tracking-widest font-bold text-xs">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
      <p>&copy; {new Date().getFullYear()} Oluwaseun Adeolu Okunola. Full-Stack Web Developer & Cloud DevSecOps Specialist.</p>
    </footer>
  );
}
