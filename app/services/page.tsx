import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";
import Image from "next/image";
import heroServicesImg from "@/images/hero-services.png";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Services | JB Engineering - Residential, Commercial & Industrial",
  description:
    "Comprehensive construction services including residential construction, commercial building, industrial facilities, renovations, project management, and more. Expert craftsmanship for every project.",
  keywords: [
    "construction services",
    "residential construction",
    "commercial construction",
    "industrial construction",
    "renovation services",
    "project management",
    "construction planning",
  ],
  openGraph: {
    title: "Construction Services | JB Engineering",
    description:
      "Comprehensive construction services including residential, commercial, and industrial projects.",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroServicesImg}
            alt="Construction Services Background"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/90 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950/95" />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
          <FadeIn direction="up" delay={0.1}>
            <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white font-medium text-sm tracking-wide uppercase">
                Expertise & Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Comprehensive construction solutions tailored to your needs. From residential homes to
              large-scale commercial projects, we deliver excellence at every stage.
            </p>
          </FadeIn>
        </div>
        
        {/* Bottom decorative wave/fade to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent z-10" />
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1} className="h-full">
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-16 mb-8">
            <div className="relative bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-slate-800 dark:border-slate-700">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                    Ready to Start Your Next Project?
                  </h2>
                  <p className="text-lg text-slate-300">
                    Contact us for a free consultation and quote. Our experts are ready to bring your vision to life with precision and excellence.
                  </p>
                </div>
                
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02] shadow-cta shrink-0 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
