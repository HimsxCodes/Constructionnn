import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";
import { Phone, Mail, MapPin, ArrowDownRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact JB Engineering | Get a Free Quote",
  description:
    "Contact JB Engineering for your next project. Get a free quote for residential, commercial, or industrial construction services. We're here to help bring your vision to life.",
  keywords: [
    "contact construction company",
    "construction quote",
    "free construction estimate",
    "construction consultation",
  ],
  openGraph: {
    title: "Contact JB Engineering | Get a Free Quote",
    description: "Contact us for your next construction project. Get a free quote today.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Typographic Header */}
      <section className="relative pt-32 pb-8 overflow-hidden">
        {/* Ambient decorative elements */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/[0.04] dark:bg-primary/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-40 left-[5%] w-[300px] h-[300px] bg-primary/[0.03] dark:bg-primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-semibold text-sm tracking-widest uppercase">
                Contact Us
              </span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight leading-[0.9] mb-6">
              Let&apos;s build
              <br />
              <span className="relative inline-block">
                <span className="text-primary">something</span>
              </span>
              {" "}great
              <span className="text-primary">.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                Ready to start your construction project? Contact us today for a free consultation
                and quote. Our team is here to help bring your vision to life.
              </p>
              <ArrowDownRight className="w-10 h-10 text-primary/40 hidden md:block flex-shrink-0 mb-1" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact Chips */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.25}>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+917016475798"
                className="group inline-flex items-center gap-3 bg-white dark:bg-slate-800 pl-2 pr-5 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                  +91 7016475798
                </span>
              </a>
              <a
                href="mailto:jbengineering96@gmail.com"
                className="group inline-flex items-center gap-3 bg-white dark:bg-slate-800 pl-2 pr-5 py-2 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">
                  jbengineering96@gmail.com
                </span>
              </a>
              <div className="group inline-flex items-center gap-3 bg-white dark:bg-slate-800 pl-2 pr-5 py-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Nikol, Ahmedabad
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />
      </div>

      {/* Form Section */}
      <section className="py-16 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up" delay={0.1}>
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
