"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const categoryColors = {
    residential: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
    commercial: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
    industrial: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
    renovation: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
  };

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="relative h-64 overflow-hidden">
        {project.images[0] ? (
          <Image
            src={project.images[0]}
            alt={`${project.title} construction project`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
            <span className="text-slate-400">No image available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize ${categoryColors[project.category]}`}
          >
            {project.category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-heading font-bold text-lg mb-1">{project.title}</h3>
          <div className="flex items-center space-x-4 text-white/90 text-sm">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 dark:text-slate-300 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex items-center space-x-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
