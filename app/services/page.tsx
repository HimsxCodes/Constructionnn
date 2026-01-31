import type { Metadata } from "next";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

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
      <section className="py-20 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-white dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Comprehensive construction solutions tailored to your needs. From residential homes to
              large-scale commercial projects, we deliver excellence at every stage.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-cta"
            >
              Get a Free Quote
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
