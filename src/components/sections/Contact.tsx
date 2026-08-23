"use client";

import { useState } from "react";
import { Mail, Phone, Globe, ArrowRight, AlertCircle } from "lucide-react";
import { contactFormSchema } from "@/lib/validation";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    const result = contactFormSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: { name?: string; email?: string; message?: string } = {};
      result.error.issues.forEach((issue) => {
        const path = issue.path[0] as keyof typeof fieldErrors;
        if (path) {
          fieldErrors[path] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const phone = "2348093924896";
    const message = `Hello, my name is ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    try {
      const popup = window.open(whatsappUrl, "_blank");
      if (!popup) {
        setSubmitError("Pop-up blocked! Please allow pop-ups to open WhatsApp.");
      }
    } catch {
      setSubmitError("Pop-up blocked! Please allow pop-ups to open WhatsApp.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-950 border-t border-slate-900 reveal-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Let&apos;s Build Something Great</h2>
        <p className="text-slate-400 mb-12">
          Available for freelance projects and full-time remote opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-4 glass rounded-2xl text-blue-400">
                <Mail />
              </div>
              <div>
                <div className="text-sm text-slate-500">Email Me</div>
                <div className="font-bold">oluwaseunokunola@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 glass rounded-2xl text-green-400">
                <Phone />
              </div>
              <div>
                <div className="text-sm text-slate-500">Call / WhatsApp</div>
                <div className="font-bold">+234 809 392 4896</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 glass rounded-2xl text-blue-400">
                <Globe />
              </div>
              <div>
                <div className="text-sm text-slate-500">Portfolio</div>
                <div className="font-bold">oluwaseun.toamultitech.tech</div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {submitError && (
              <div
                role="alert"
                className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm flex items-center gap-2"
              >
                <AlertCircle size={16} />
                <span>{submitError}</span>
              </div>
            )}

            <div>
              <input
                className={`w-full bg-white/5 border ${errors.name ? "border-red-500" : "border-white/10"} p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors`}
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1 text-left">{errors.name}</p>}
            </div>

            <div>
              <input
                className={`w-full bg-white/5 border ${errors.email ? "border-red-500" : "border-white/10"} p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors`}
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1 text-left">{errors.email}</p>
              )}
            </div>

            <div>
              <textarea
                className={`w-full bg-white/5 border ${errors.message ? "border-red-500" : "border-white/10"} p-4 rounded-xl focus:outline-none focus:border-blue-500 transition-colors`}
                name="message"
                placeholder="Project Details"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1 text-left">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Send via WhatsApp <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
