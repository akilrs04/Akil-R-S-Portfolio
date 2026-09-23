"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6 bg-[#f4f4f3]/40">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-neutral-900 font-normal tracking-tight">
            Initiate <span className="italic text-neutral-400">Collaboration</span>
          </h2>
          <p className="text-neutral-500 text-sm mt-3">
            Available for selected client inquiries and strategic advisory roles.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/90 border border-black/5 rounded-3xl p-8 sm:p-10 shadow-sm space-y-6">
          <div>
            <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Name / Organization
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-neutral-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {status === "success" && (
            <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs font-medium">
              Thank you. Your message has been safely received.
            </div>
          )}

          {status === "error" && (
            <div className="p-4 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium">
              An error occurred. Please try reaching out directly via email.
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#171717] hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium py-3.5 rounded-full shadow-sm hover:shadow-md transition-all disabled:opacity-50"
          >
            <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
            <ArrowUpRight size={14} className="text-neutral-400" />
          </button>
        </form>
      </div>
    </section>
  );
}
