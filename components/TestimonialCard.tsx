"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-slate-300 dark:text-slate-600"
            }`}
          />
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm leading-relaxed">
        &quot;{testimonial.comment}&quot;
      </p>
      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
        <div className="font-semibold text-slate-dark dark:text-white">
          {testimonial.clientName}
        </div>
        {testimonial.company && (
          <div className="text-sm text-slate-500 dark:text-slate-400">{testimonial.company}</div>
        )}
        {testimonial.projectType && (
          <div className="text-xs text-primary mt-1">{testimonial.projectType}</div>
        )}
      </div>
    </motion.div>
  );
}
