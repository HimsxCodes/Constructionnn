import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { StatsCounter } from "@/components/StatsCounter";
import { TestimonialCard } from "@/components/TestimonialCard";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JB Engineering | Building Tomorrow's Landmarks",
  description:
    "Expert construction services delivering excellence, reliability, and unmatched quality for over 25 years. View our portfolio of successful residential, commercial, and industrial projects.",
  openGraph: {
    title: "JB Engineering | Building Tomorrow's Landmarks",
    description:
      "Expert construction services delivering excellence, reliability, and unmatched quality for over 25 years.",
  },
};

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <HeroSection />
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-dark dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive construction services tailored to meet your project needs
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <FadeIn key={service.id} delay={index * 0.1}>
                <ServiceCard {...service} />
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-cta"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      <ProjectGallery projects={featuredProjects} />
      <StatsCounter />
      <section className="py-20 bg-slate-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-dark dark:text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with us
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <FadeIn key={testimonial.id} delay={index * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
