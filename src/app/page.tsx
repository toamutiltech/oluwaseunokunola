'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Code, Database, Server, Zap, Cloud, Code2, Swords, KeyRound, Phone, Instagram, Twitter, Linkedin } from "lucide-react";


export default function Portfolio() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "2349134993200"; // Nigerian number in international format
    const message = `Hello, my name is ${form.name} (%0AEmail: ${form.email})%0A%0A${form.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="font-sans scroll-smooth relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-800 via-indigo-900 to-gray-900 animate-background-move opacity-20 z-0" />

      {/* Hero Section */}
<section className="relative min-h-screen text-white p-8 flex flex-col justify-center items-center text-center z-10 animate-section">
  <div className="absolute top-8 right-8 flex flex-col gap-4">
    <a href="https://twitter.com/Aookunola" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110">
      <Twitter className="w-6 h-6" />
    </a>
    <a href="https://linkedin.com/in/oluwaseun-okunola-168030a5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-transform hover:scale-110">
      <Linkedin className="w-6 h-6" />
    </a>
    <a href="https://instagram.com/adeolu2019" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-transform hover:scale-110">
      <Instagram className="w-6 h-6" />
    </a>
  </div>
<div className="flex flex-col items-center justify-center">
    <div className="mb-6 relative group">
      <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative rounded-full overflow-hidden w-50 h-50 border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-300">
        <img
          src="/images/oluwaseun.png"
          alt="Oluwaseun Okunola"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-fade-in">
      Oluwaseun Adeolu Okunola
    </h1>
    <p className="mt-4 text-lg sm:text-xl max-w-2xl animate-fade-in-delay">
      Full-stack developer skilled in React, Next.js, Vue, DevOps, APIs, and secure web app development.
    </p>
    <div className="mt-6 flex gap-4 animate-fade-in-delay">
      <a href="/OLUWASEUN_ADEOLU_OKUNOLA_CV.pdf" download>
        <Button>Download Resume</Button>
      </a>
      <a
        href="https://wa.me/2349134993200?text=Hello%2C%20I'm%20interested%20in%20working%20with%20you"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline">Contact Me</Button>
      </a>
    </div>
  </div>
</section>

      {/* About Section */}
      <section className="py-16 px-6 text-lg bg-zinc-900 text-white  animate-slide-up" id="about">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="max-w-6xl mx-auto">
          I&apos;m Oluwaseun Adeolu Okunola, a passionate and results-driven full-stack developer with over 5 years of experience building modern, secure, and scalable web and mobile applications. I specialize in technologies like React, Next.js, Vue.js, PHP, Python, and Flask, and have strong expertise in database systems including PostgreSQL, MySQL, and SQLite.
          <br /><br />
          With a solid understanding of DevOps and DevSecOps practices—such as CI/CD, SAAC, PAAC, IAAC, and API integration—I deliver high-quality solutions that meet real business needs. I&apos;ve led multiple successful projects, ranging from eCommerce platforms to customer care apps and real estate systems.
          <br /><br />
          Whether you&apos;re a startup or an established company, I&apos;m here to help you turn your ideas into powerful digital products.
        </p>
      </section>
<hr className="bg-white py-1 px-6" />
      {/* Skills Section */}
     <section className="py-16 px-6 bg-zinc-900 text-white text-lg text-center animate-slide-fade-in" id="skills">
  <h2 className="text-3xl font-semibold mb-4 flex justify-center items-center gap-2">
     Technical Skills
  </h2>
  <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
    <li className="flex items-center gap-2 justify-center"><Code className="w-5 h-5 text-cyan-400" /> React</li>
    <li className="flex items-center gap-2 justify-center"><Code2 className="w-5 h-5 text-purple-400" /> Next.js</li>
    <li className="flex items-center gap-2 justify-center"><Zap className="w-5 h-5 text-pink-400" /> Vue.js</li>
    <li className="flex items-center gap-2 justify-center"><Server className="w-5 h-5 text-yellow-400" /> PHP</li>
    <li className="flex items-center gap-2 justify-center"><Server className="w-5 h-5 text-indigo-400" /> Python</li>
    <li className="flex items-center gap-2 justify-center"><Server className="w-5 h-5 text-green-400" /> Flask</li>
    <li className="flex items-center gap-2 justify-center"><Database className="w-5 h-5 text-rose-400" /> MySQL</li>
    <li className="flex items-center gap-2 justify-center"><Database className="w-5 h-5 text-teal-400" /> PostgreSQL</li>
    <li className="flex items-center gap-2 justify-center"><Database className="w-5 h-5 text-orange-400" /> SQLite</li>
    <li className="flex items-center gap-2 justify-center"><Cloud className="w-5 h-5 text-blue-500" /> CI/CD</li>
    <li className="flex items-center gap-2 justify-center"><Swords className="w-5 h-5 text-red-500" /> SAAC / PAAC / IAAC</li>
    <li className="flex items-center gap-2 justify-center"><KeyRound className="w-5 h-5 text-yellow-500" /> API Integration</li>
  </ul>
</section>

<hr className="bg-white py-1 px-6" />

{/* Projects Section */}
<section className="py-16 px-6 bg-zinc-900 text-white text-lg text-center animate-fade-up" id="projects">
  <h2 className="text-3xl font-semibold mb-6">Projects</h2>
  <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src="/images/Abuja-IT-Support.png" alt="Abuja IT Support Solution" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">Abuja IT Support Solution</h3>
        <p className="text-sm">IT organization.</p>
        <a className="text-blue-400 hover:underline" href="https://abujaitsupport.com" target="_blank">Visit Site</a>
      </div>
    </div>
    <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src="/images/bizapp.png" alt="Bizapplive" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">Bizapplive</h3>
        <p className="text-sm">Customer care app built with Flask and JavaScript.</p>
        <a className="text-blue-400 hover:underline" href="https://bizapplive.com.ng" target="_blank">Visit Site</a>
      </div>
    </div>
    <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src="/images/nexa.png" alt="Nexa" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">Nexa.ng</h3>
        <p className="text-sm">Small business website builder using modern tools.</p>
        <a className="text-blue-400 hover:underline" href="https://nexa.ng" target="_blank">Visit Site</a>
      </div>
    </div>
        <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src="/images/happy-homes.png" alt="Happy Homes" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">Happy Homes</h3>
        <p className="text-sm">A demotration of a realestate design (Happy Homes).</p>
        <a className="text-blue-400 hover:underline" href="https://happy-homes-ten.vercel.app" target="_blank">Visit Site</a>
      </div>
    </div>
        <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img src="/images/Access-Book-Shop-and-Stationaries.png" alt="Access Book Shop & Stationaries" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">Access Book Shop & Stationaries</h3>
        <p className="text-sm">Discover a world of knowledge and tools! Shop quality books and stationaries for students, professionals, and schools.</p>
        <a className="text-blue-400 hover:underline" href="https://www.accessbookshopandstationaries.com.ng" target="_blank">Visit Site</a>
      </div>
    </div>
        <div className="bg-zinc-800 text-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
     <img src="/images/lacolina.png" alt="La Colina Five Technologies Enterprise" className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4 text-left">
        <h3 className="font-bold text-lg">La Colina Five Technologies Enterprise</h3>
        <p className="text-sm">La Colina Five Technologies Enterprise, is at the forefront of softwares/Information and Communication Technology (ICT) Solutions provision in Nigeria and across Africa.</p>
        <a className="text-blue-400 hover:underline" href="https://www.lacolinatech.com.ng" target="_blank">Visit Site</a>
      </div>
    </div>
   
  </div>
</section>

<hr className="bg-white py-1 px-6" />


      {/* Contact Section */}
<section className="py-16 px-6 bg-zinc-900 text-white text-center animate-bounce-in" id="contact">
  <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
  <div className="mb-8 space-y-4">
    <p className="flex items-center justify-center gap-2"><Phone className="w-5 h-5 text-blue-400" /> +234 809 392 4896, +234 813 966 9156</p>
    <p className="flex items-center justify-center gap-2"><Mail className="w-5 h-5 text-green-400" /> oluwaseunokunola@gmail.com</p>
    <div className="flex justify-center gap-4 mt-4">
      <a href="https://twitter.com/Aookunola" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
      <a href="https://linkedin.com/in/oluwaseun-okunola-168030a5" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin className="w-5 h-5" /></a>
      <a href="https://instagram.com/adeolu2019" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><Instagram className="w-5 h-5" /></a>
    </div>
  </div>
  <form onSubmit={handleSubmit} className="max-w-2xl space-y-4 mx-auto">
    <input
      className="w-full border border-gray-300 p-2 rounded"
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      required
    />
    <input
      className="w-full border border-gray-300 p-2 rounded"
      type="email"
      name="email"
      placeholder="Your Email"
      value={form.email}
      onChange={handleChange}
      required
    />
    <textarea
      className="w-full border border-gray-300 p-2 rounded"
      name="message"
      placeholder="Your Message"
      rows={4}
      value={form.message}
      onChange={handleChange}
      required
    />
    <Button type="submit" className="flex items-center gap-2 mx-auto">
      <Mail size={16} /> Send via WhatsApp
    </Button>
  </form>
</section>

      <footer className="text-center py-8 text-sm text-gray-500 bg-gray-100 relative z-10">
        &copy; {new Date().getFullYear()} Oluwaseun Adeolu Okunola. All rights reserved.
      </footer>

      {/* Tailwind animations */}
      <style jsx global>{`
        @keyframes background-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-background-move {
          background-size: 200% 200%;
          animation: background-move 20s ease infinite;
        }
        .animate-fade-in {
          animation: fadeIn 2s ease forwards;
        }
        .animate-fade-in-delay {
          animation: fadeIn 2s ease 0.5s forwards;
        }
        .animate-slide-up {
          animation: slideUp 1.5s ease both;
        }
        .animate-slide-fade-in {
          animation: slideFade 1.8s ease both;
        }
        .animate-fade-up {
          animation: fadeUp 2s ease both;
        }
        .animate-bounce-in {
          animation: bounceIn 1.2s ease both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(40px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideFade {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          60% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </main>
  );
}
