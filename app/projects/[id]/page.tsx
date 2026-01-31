import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { MapPin, Calendar, DollarSign, User } from "lucide-react";
import { formatCurrency } from "@/lib/validation";
import { Project } from "@/types/project";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | JB Engineering",
    };
  }

  return {
    title: `${project.title} | JB Engineering Project`,
    description: project.description,
    openGraph: {
      title: `${project.title} | JB Engineering`,
      description: project.description,
      images: project.images.length > 0 ? [project.images[0]] : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold text-sm mb-4 capitalize">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
              {project.description}
            </p>
          </div>

          {project.beforeImage && project.afterImage && (
            <div className="mb-12">
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              {project.images.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.images.map((image, index) => (
                    <div key={index} className="relative h-64 rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-700">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-64 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center mb-8">
                  <span className="text-slate-400">No images available</span>
                </div>
              )}
            </div>

            <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 space-y-6">
              <h2 className="text-2xl font-heading font-bold text-slate-dark dark:text-white">
                Project Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Location</div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Duration</div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      {project.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      Completion Date
                    </div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      {new Date(project.completionDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
                {project.budget && (
                  <div className="flex items-start space-x-3">
                    <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Budget</div>
                      <div className="font-semibold text-slate-dark dark:text-white">
                        {formatCurrency(project.budget)}
                      </div>
                    </div>
                  </div>
                )}
                {project.clientName && (
                  <div className="flex items-start space-x-3">
                    <User className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">Client</div>
                      <div className="font-semibold text-slate-dark dark:text-white">
                        {project.clientName}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
