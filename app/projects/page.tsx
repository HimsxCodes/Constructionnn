import type { Metadata } from "next";
import { ProjectGallery } from "@/components/ProjectGallery";
import { projects } from "@/data/projects";
import { FadeIn } from "@/components/FadeIn";

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
      <section className="py-20 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-white dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              Our Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A showcase of our completed construction projects across residential, commercial,
              industrial, and renovation sectors. Each project represents our commitment to quality
              and excellence.
            </p>
          </FadeIn>
        </div>
      </section>
      <ProjectGallery projects={projects} />
    </div>
  );
}
