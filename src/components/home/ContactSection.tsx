"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Copy,
  Check,
  Clock,
  MapPin,
  Send,
  Loader2,
  Sparkles,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const SERVICE_TAGS = [
  "Product Design",
  "Web Design",
  "Mobile App",
  "No-Code Dev",
  "Design Advisory",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Product Design",
  ]);
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [copied, setCopied] = useState(false);
  const directEmail = "hello@agero.design";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(directEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // fallback
    }
  };

  const toggleService = (tag: string) => {
    setSelectedServices((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const fullMessage =
        selectedServices.length > 0
          ? `[Interested in: ${selectedServices.join(", ")}]\n\n${formData.message}`
          : formData.message;

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: fullMessage,
        }),
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
    <section
      id="contact"
      className="relative w-full py-24 sm:py-32 md:py-36 px-4 sm:px-6 overflow-hidden"
    >
      <div className="max-w-[1040px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start"
        >
          {/* Left Column: Editorial Outreach & Context */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              {/* Minimal Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-black/5 dark:border-white/10 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-medium text-neutral-600 dark:text-neutral-300 tracking-[-0.01em]">
                  Available for new projects & advisory
                </span>
              </div>

              {/* Editorial Title strictly matching Hero and Projects sections */}
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.14] text-neutral-900 dark:text-neutral-50 font-normal tracking-tight">
                Initiate a{" "}
                <span className="italic text-neutral-400 font-normal">
                  conversation
                </span>
              </h2>

              <p className="text-neutral-500 dark:text-neutral-400 text-xs sm:text-[0.925rem] leading-relaxed tracking-[-0.01em] max-w-md">
                Have a new product to design, an advisory role, or a vision to
                bring into focus? Share details about your timeline and goals, or
                reach out directly.
              </p>
            </motion.div>

            {/* Quick Contact & Studio Metadata Cards */}
            <motion.div variants={itemVariants} className="space-y-3.5">
              {/* 1-Click Direct Email Card */}
              <div className="group relative flex items-center justify-between p-4 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-black/15 dark:hover:border-white/20 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${directEmail}`}
                      className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-[11px] font-medium transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </motion.button>
              </div>

              {/* Studio Base & Status Card */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/70 dark:bg-neutral-900/60 border border-black/5 dark:border-white/10 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                      Studio Base
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      Worldwide / Remote
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available Now</span>
                </div>
              </div>
            </motion.div>

            {/* Social Channels Minimalist Pills */}
            <motion.div variants={itemVariants} className="pt-2">
              <span className="block text-[11px] uppercase tracking-wider text-neutral-400 font-medium mb-3">
                Connect Online
              </span>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 border border-black/5 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white text-xs font-normal transition-colors group shadow-xs"
                  >
                    <span>{link.platform}</span>
                    <ArrowUpRight
                      size={12}
                      className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Elevated Interactive Contact Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white/80 dark:bg-[#111215]/80 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[28px] sm:rounded-[32px] p-6 sm:p-9 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Category Tag Chips */}
              <div>
                <label className="flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-neutral-400 mb-3">
                  <Sparkles size={13} className="text-neutral-400" />
                  <span>I&apos;m interested in</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_TAGS.map((tag) => {
                    const isSelected = selectedServices.includes(tag);
                    return (
                      <motion.button
                        key={tag}
                        type="button"
                        onClick={() => toggleService(tag)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                          isSelected
                            ? "bg-[#171717] text-white shadow-xs font-medium dark:bg-white dark:text-neutral-900"
                            : "bg-neutral-100/90 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 font-normal"
                        }`}
                      >
                        {tag}
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* Form Input: Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-medium uppercase tracking-wider text-neutral-400"
                >
                  Name / Organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full px-4 py-3.5 bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/90 dark:border-neutral-700/60 rounded-xl text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 transition-all duration-200"
                  placeholder="e.g. John Doe / Studio Acme"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              {/* Form Input: Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-medium uppercase tracking-wider text-neutral-400"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full px-4 py-3.5 bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/90 dark:border-neutral-700/60 rounded-xl text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 transition-all duration-200"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              {/* Form Input: Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-medium uppercase tracking-wider text-neutral-400"
                >
                  Project Details
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  className="w-full px-4 py-3.5 bg-neutral-50/80 dark:bg-neutral-800/40 border border-neutral-200/90 dark:border-neutral-700/60 rounded-xl text-neutral-900 dark:text-neutral-100 text-sm placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 transition-all duration-200 resize-none"
                  placeholder="Tell me about your product vision, timeline, and scope..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              {/* Animated Status Feedback with AnimatePresence */}
              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-[0.85rem] font-medium flex items-center gap-2.5"
                  >
                    <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>
                      Thank you. Your message has been safely received. I&apos;ll be in touch shortly.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-rose-800 dark:text-rose-300 text-xs sm:text-[0.85rem] font-medium"
                  >
                    Unable to send message right now. Please reach out directly to{" "}
                    <a
                      href={`mailto:${directEmail}`}
                      className="underline font-semibold"
                    >
                      {directEmail}
                    </a>
                    .
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Action Button strictly matching Pill CTA style */}
              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={status === "submitting" ? {} : { scale: 1.015 }}
                whileTap={status === "submitting" ? {} : { scale: 0.985 }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#171717] hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 text-xs sm:text-[0.875rem] font-medium py-3.5 px-6 rounded-full shadow-sm hover:shadow-md transition-all duration-200 disabled:opacity-50 group cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={15} className="animate-spin text-neutral-400" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowUpRight
                      size={14}
                      className="text-neutral-400 group-hover:text-white dark:text-neutral-600 dark:group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
