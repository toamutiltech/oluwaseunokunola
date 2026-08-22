'use client';

import { useState } from "react";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

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

  return (
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
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors"
              name="message"
              placeholder="Project Details"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
              Send via WhatsApp <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
