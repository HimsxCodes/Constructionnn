"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { Project, ProjectCategory } from "@/types/project";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./FadeIn";

interface ProjectGalleryProps {
  projects: Project[];
}

const categories: (ProjectCategory | "all")[] = ["all", "residential", "commercial", "industrial", "renovation"];

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | "all">("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap items-center justify-center p-2 gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl md:rounded-full border border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-slate-200/20 dark:shadow-black/20">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize text-sm md:text-base whitespace-nowrap ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-primary rounded-full shadow-md"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">
                    {category === "all" ? "All Projects" : category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <FadeIn className="mt-20 mb-8">
          <div className="relative bg-slate-900 dark:bg-slate-800 rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl border border-slate-800 dark:border-slate-700">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent z-0" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Ready to Build Something Amazing?
                </h2>
                <p className="text-lg text-slate-300">
                  Whether it is a new commercial space or a residential dream home, contact us for a free consultation and quote. Our experts are ready to bring your vision to life.
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
  );
}
