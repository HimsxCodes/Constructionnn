"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

const circularText = "BUILD WITH PURPOSE • DESIGN WITH PRECISION • DELIVER WITH PRIDE • ";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const slideUp = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-slate-50 dark:bg-[#08080d] overflow-hidden flex flex-col"
    >
      {/* ─── Background layers ─── */}

      {/* Warm ambient glow — static, no repaint cost */}
      <div
        className="absolute inset-0 pointer-events-none will-change-auto"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 25% 55%, rgba(255,107,53,0.05) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 75% 30%, rgba(120,140,255,0.03) 0%, transparent 60%)",
        }}
      />

      {/* Blueprint grid — static CSS pattern, lightweight */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04] dark:opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ─── Left vertical label ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-10 hidden xl:flex items-center gap-4"
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg) translateY(50%)" }}
      >
        <span className="text-[9px] text-slate-400 dark:text-slate-600 tracking-[0.5em] uppercase font-medium">
          JB Engineering
        </span>
        <div className="w-px h-8 bg-slate-300 dark:bg-slate-800" style={{ writingMode: "horizontal-tb" }} />
        <span className="text-[9px] text-slate-400 dark:text-slate-700 tracking-[0.3em] font-mono">
          © 2024
        </span>
      </motion.div>

      {/* ─── "24" watermark — pure CSS, no motion tracking ─── */}
      <div
        className="absolute top-1/2 right-[2%] -translate-y-1/2 z-0 pointer-events-none select-none hidden md:block text-[32vw] font-heading font-black leading-none opacity-[0.03] dark:opacity-[0.018] text-slate-900 dark:text-white"
        aria-hidden="true"
      >
        24
      </div>

      {/* ─── Main content — GPU-accelerated scroll transform ─── */}
      <motion.div
        className="flex-1 flex flex-col justify-center relative z-10 pl-8 pr-8 sm:pl-14 sm:pr-14 lg:pl-24 lg:pr-16 xl:pl-32 xl:pr-24 pt-8 pb-16 will-change-transform"
        style={{ opacity: fadeOut, y: slideUp }}
      >
        {/* Small tagline */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease, delay: 0.35 }}
            className="h-px w-10 bg-primary origin-left"
          />
          <span className="text-[11px] text-primary/80 tracking-[0.35em] uppercase font-semibold">
            Engineering Excellence
          </span>
        </motion.div>

        {/* ─── Headline + Circle layout ─── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-20">
          {/* Typography block */}
          <div className="flex-1 max-w-[850px]">
            {/* Line 1 — solid */}
            <div className="overflow-hidden pb-6">
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease, delay: 0.4 }}
                className="text-[clamp(3.2rem,8vw,7.8rem)] font-heading font-black text-slate-900 dark:text-white leading-[0.92] tracking-[-0.04em]"
              >
                Building
              </motion.h1>
            </div>

            {/* Line 2 — outlined / stroke */}
            <div className="overflow-hidden pb-6">
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease, delay: 0.53 }}
                className="text-[clamp(3.2rem,8vw,7.8rem)] font-heading font-black leading-[0.92] tracking-[-0.04em] select-none hero-outline-text"
              >
                Tomorrow&apos;s
              </motion.h1>
            </div>

            {/* Line 3 — accent color */}
            <div className="overflow-hidden pb-6">
              <motion.h1
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease, delay: 0.66 }}
                className="text-[clamp(3.2rem,8vw,7.8rem)] font-heading font-black leading-[0.92] tracking-[-0.04em] text-primary"
              >
                Landmarks.
              </motion.h1>
            </div>

            {/* ─── Desc + CTA row ─── */}
            <div className="mt-14 flex flex-col sm:flex-row sm:items-end gap-10 sm:gap-14">
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease, delay: 1.1 }}
                className="text-slate-500 dark:text-slate-400/90 text-[15px] font-light leading-[1.85] max-w-[340px]"
              >
                Precision engineering meets bold vision.
                We craft structures built to endure,
                from first sketch to final handover.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 1.3 }}
                className="flex items-center gap-7"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 px-7 py-[18px] bg-primary text-white font-bold text-[12px] uppercase tracking-[0.18em] overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-primary">
                    Start a Project
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                  <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />
                </Link>

                <Link
                  href="/projects"
                  className="group text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white text-[12px] uppercase tracking-[0.18em] font-semibold transition-colors duration-400 relative pb-2"
                >
                  View Work
                  <span className="absolute bottom-0 left-0 w-full h-px bg-slate-300 dark:bg-slate-800 group-hover:bg-primary transition-colors duration-400" />
                </Link>
              </motion.div>
            </div>
          </div>

          {/* ─── Rotating services circle — CSS animation instead of framer-motion ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease, delay: 1 }}
            className="hidden lg:flex items-center justify-center flex-shrink-0 mt-6"
          >
            <div className="relative w-[200px] h-[200px] xl:w-[250px] xl:h-[250px]">
              {/* Rotating text ring — CSS animation for GPU compositing */}
              <svg
                viewBox="0 0 260 260"
                className="w-full h-full animate-[spin_45s_linear_infinite] will-change-transform"
              >
                <defs>
                  <path
                    id="textRing"
                    d="M 130,130 m -100,0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                  />
                </defs>
                <text
                  className="fill-slate-400/50 dark:fill-slate-600/60"
                  style={{
                    fontSize: "10.5px",
                    letterSpacing: "0.32em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  <textPath href="#textRing">{circularText}</textPath>
                </text>
              </svg>

              {/* Dashed orbit */}
              <svg
                viewBox="0 0 260 260"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <circle
                  cx="130"
                  cy="130"
                  r="120"
                  fill="none"
                  className="stroke-slate-200 dark:stroke-white/[0.03]"
                  strokeWidth="0.5"
                />
                <circle
                  cx="130"
                  cy="130"
                  r="82"
                  fill="none"
                  stroke="rgba(255,107,53,0.12)"
                  strokeWidth="0.7"
                  strokeDasharray="3 9"
                />
              </svg>

              {/* Center: nested rotated squares */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 1, rotate: 45 }}
                  transition={{ duration: 1.2, ease, delay: 1.8 }}
                  className="w-[55px] h-[55px] xl:w-[65px] xl:h-[65px] border border-slate-300/60 dark:border-slate-700/40 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease, delay: 2.2 }}
                    className="w-[28px] h-[28px] xl:w-[32px] xl:h-[32px] border border-primary/30 dark:border-primary/25 -rotate-45"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ─── Bottom process strip ─── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 1.7 }}
          className="mt-20 lg:mt-24"
        >
          {/* Horizontal rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2.2, ease, delay: 1.7 }}
            className="h-px max-w-2xl bg-gradient-to-r from-slate-300/60 dark:from-slate-700/40 via-slate-200/30 dark:via-slate-800/20 to-transparent origin-left mb-6"
          />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:gap-x-14">
            {[
              { n: "01", label: "Design & Plan" },
              { n: "02", label: "Build & Execute" },
              { n: "03", label: "Deliver & Sustain" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease, delay: 2 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="text-[9px] font-mono text-primary/55 dark:text-primary/45 tracking-widest">
                  {item.n}
                </span>
                <span className="text-[11px] text-slate-500/80 font-medium tracking-[0.06em]">
                  {item.label}
                </span>
                {i < 2 && (
                  <div className="w-px h-3 bg-slate-300/60 dark:bg-slate-800/60 ml-5 lg:ml-10 hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Scroll pulse ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-0"
      >
        <div className="w-px h-10 bg-gradient-to-b from-slate-400/50 dark:from-slate-500/60 to-transparent origin-top animate-pulse" />
      </motion.div>

      {/* ─── Bottom marquee bar — CSS animation for GPU compositing ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-slate-200/50 dark:border-white/[0.03] overflow-hidden">
        <div className="flex items-center py-3 whitespace-nowrap">
          <div
            className="flex items-center animate-marquee will-change-transform"
          >
            {[0, 1].map((si) => (
              <div key={si} className="flex items-center">
                {[
                  "RESIDENTIAL",
                  "COMMERCIAL",
                  "INDUSTRIAL",
                  "RENOVATION",
                  "INFRASTRUCTURE",
                  "ARCHITECTURE",
                  "PLANNING",
                  "INTERIORS",
                ].map((w, i) => (
                  <span key={`${si}-${i}`} className="flex items-center">
                    <span className="mx-5 text-[9px] font-medium tracking-[0.45em] uppercase text-slate-900/[0.08] dark:text-white/[0.08]">
                      {w}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full bg-primary/20 dark:bg-primary/15" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
