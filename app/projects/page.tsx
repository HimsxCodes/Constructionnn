import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/FadeIn";
import Image from "next/image";
import heroProjectsImg from "@/images/hero-projects.png";

export const metadata: Metadata = {
  title: "Construction Projects Portfolio | JB Engineering - Featured Projects",
  description:
    "Explore our portfolio of successful construction projects including residential complexes, commercial buildings, industrial facilities, and renovation projects. View before and after photos.",
  keywords: [
    "construction projects",
    "construction portfolio",
    "residential projects",
    "commercial projects",
    "industrial projects",
    "renovation projects",
    "construction gallery",
  ],
  openGraph: {
    title: "Construction Projects Portfolio | JB Engineering",
    description: "Explore our portfolio of successful construction projects across all sectors.",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroProjectsImg}
            alt="Construction Projects Background"
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
                Portfolio of Excellence
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
              Our <span className="text-primary">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              A showcase of our completed construction projects across every sectors. Each project represents our commitment to quality
              and excellence.
            </p>
          </FadeIn>
        </div>
        
        {/* Bottom decorative wave/fade to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white dark:from-slate-900 to-transparent z-10" />
      </section>

      <ProjectGallery projects={projects} />
    </div>
  );
}
