"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Shield,
  Target,
  Eye,
  Rocket,
  Handshake,
} from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    icon: Target,
    title: "Uncompromising Excellence",
    description:
      "We believe in not just getting the job done, but mastering it with absolute precision.",
  },
  {
    icon: Award,
    title: "Unyielding Integrity",
    description:
      "Our foundation is built on honesty and ethical standards that never waver.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description:
      "Complete visibility in every deal and project, building trust that lasts a lifetime.",
  },
  {
    icon: Rocket,
    title: "Value-Driven Impact",
    description:
      "We extract maximum value from every project, ensuring your investment makes a difference.",
  },
];

const communityImpact = [
  {
    icon: Users,
    title: "Local Employment",
    description:
      "We empower local youth through specialized training, fostering self-reliance and growth.",
  },
  {
    icon: Handshake,
    title: "Community Trust",
    description:
      "Business is more than profit; it's about building a legacy within our community.",
  },
];


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#08080d]">
      {/* ═══════════════════════════════
          HERO SECTION
      ═══════════════════════════════ */}
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-[#08080d] dark:via-[#08080d] dark:to-[#08080d]">
        {/* Ambient glows */}
        <div
          className="absolute inset-0 pointer-events-none dark:block hidden"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 30% 50%, rgba(255,107,53,0.04) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 70% 30%, rgba(120,140,255,0.02) 0%, transparent 60%)",
          }}
        />
        {/* Light mode subtle warm glow */}
        <div
          className="absolute inset-0 pointer-events-none dark:hidden"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 30% 50%, rgba(255,107,53,0.06) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 70% 30%, rgba(255,107,53,0.03) 0%, transparent 60%)",
          }}
        />

        {/* Blueprint grid — dark only */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.025] hidden dark:block"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
          }}
        />
        {/* Light mode grid */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04] dark:hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)`,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Large watermark */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, ease, delay: 0.8 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none text-[22vw] font-heading font-black leading-none whitespace-nowrap text-slate-900/[0.03] dark:text-white/[0.015]"
          aria-hidden="true"
        >
          ABOUT
        </motion.span>

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center pt-28 pb-10">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="h-px w-10 bg-primary/40" />
            <span className="text-[10px] text-primary/80 tracking-[0.4em] uppercase font-semibold">
              Our Story
            </span>
            <div className="h-px w-10 bg-primary/40" />
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease, delay: 0.4 }}
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-heading font-black leading-[0.95] tracking-[-0.03em] text-slate-900 dark:text-white"
            >
              The JB Engineering
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.1, ease, delay: 0.55 }}
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-heading font-black text-primary leading-[0.95] tracking-[-0.03em]"
            >
              Legacy
            </motion.h1>
          </div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="text-lg md:text-xl max-w-2xl mx-auto font-light italic leading-relaxed text-slate-500 dark:text-slate-400/90"
          >
            &quot;Whether the job is small or large, our hard work and quality
            are always the same.&quot;
          </motion.p>

          {/* Scroll line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="mt-6 flex flex-col items-center"
          >
            <motion.div
              className="w-px h-10 bg-gradient-to-b from-slate-300 dark:from-slate-500/50 to-transparent origin-top"
              animate={{ scaleY: [1, 0.3, 1], opacity: [0.5, 0.15, 0.5] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white dark:from-[#08080d] to-transparent z-10" />
      </section>

      {/* ═══════════════════════════════
          VISION & MISSION
      ═══════════════════════════════ */}
      <section className="relative py-8 md:py-10 overflow-hidden bg-white dark:bg-[#08080d]">
        {/* Subtle glow behind cards */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/[0.03] dark:bg-primary/[0.02] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              className="group relative rounded-2xl p-7 md:p-9 border border-slate-200 dark:border-white/[0.06] bg-slate-50/80 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              {/* Top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease, delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent origin-left"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                    Our Vision
                  </h2>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-[1.8] font-light">
                  To etch the JB Engineering name into the bedrock of the
                  technology and service sector, defined forever by unyielding
                  integrity and absolute excellence. We strive to be the
                  standard by which others are measured.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: 0.15 }}
              className="group relative rounded-2xl p-7 md:p-9 border border-slate-200 dark:border-white/[0.06] bg-slate-50/80 dark:bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease, delay: 0.45 }}
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent origin-left"
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 dark:text-white">
                    Our Mission
                  </h2>
                </div>
                <p className="text-[15px] text-slate-600 dark:text-slate-400 leading-[1.8] font-light">
                  To infuse every project—from the most modest to the most
                  monumental—with a &apos;Value&apos; that resonates in our
                  clients&apos; lives and legacies. We do not just build; we
                  master the craft of difference, ensuring every client feels
                  the impact of our dedication.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════
          CORE VALUES
      ═══════════════════════════════ */}
      <section className="relative py-8 md:py-10 overflow-hidden bg-slate-50 dark:bg-[#08080d]">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.02] dark:bg-primary/[0.015] rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-10 bg-primary/30" />
              <span className="text-[10px] text-primary/70 tracking-[0.4em] uppercase font-semibold">
                What We Stand For
              </span>
              <div className="h-px w-10 bg-primary/30" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 dark:text-white mb-3">
              Core Values
            </h2>
            <p className="text-slate-500 dark:text-slate-400/80 text-[15px] max-w-xl mx-auto font-light">
              The pillars that support every brick we lay and every deal we sign.
            </p>
          </motion.div>

          {/* Values grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease, delay: index * 0.1 }}
                  className="group relative rounded-2xl p-6 border border-slate-200 dark:border-white/[0.06] bg-white dark:bg-white/[0.015] backdrop-blur-sm overflow-hidden text-center hover:shadow-lg dark:hover:shadow-none transition-shadow duration-500"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Top accent */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-primary/[0.08] border border-primary/15 flex items-center justify-center mx-auto mb-4 group-hover:border-primary/30 group-hover:bg-primary/[0.12] transition-all duration-500">
                      <IconComponent className="w-6 h-6 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400/80 text-sm leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════
          COMMUNITY & BEYOND
      ═══════════════════════════════ */}
      <section className="relative py-8 md:py-10 overflow-hidden bg-white dark:bg-[#08080d]">
        {/* Glow */}
        <div className="absolute bottom-0 left-[20%] w-[500px] h-[400px] bg-primary/[0.03] dark:bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="relative rounded-2xl border border-primary/15 dark:border-primary/[0.12] bg-primary/[0.03] dark:bg-primary/[0.02] backdrop-blur-sm p-8 md:p-12 overflow-hidden"
          >
            {/* Decorative corner glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="text-center mb-8"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 dark:text-white mb-3">
                  Community & Beyond
                </h2>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-light">
                  We believe that business is not just about profit, it&apos;s
                  about elevating the lives around us.
                </p>
              </motion.div>

              {/* Impact items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityImpact.map((impact, idx) => {
                  const IconComponent = impact.icon;
                  return (
                    <motion.div
                      key={impact.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.7,
                        ease,
                        delay: 0.2 + idx * 0.12,
                      }}
                      className="group flex gap-5 items-start"
                    >
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-white/80 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.08] flex items-center justify-center group-hover:border-primary/25 group-hover:bg-primary/[0.06] transition-all duration-500">
                        <IconComponent className="w-5 h-5 text-primary/80 group-hover:text-primary transition-colors duration-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                          {impact.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 text-[15px] leading-relaxed font-light">
                          {impact.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom spacer */}
      <div className="h-4 bg-gradient-to-b from-white dark:from-[#08080d] to-slate-50 dark:to-slate-900" />
    </div>
  );
}
