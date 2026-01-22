"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const IconComponent = (Icons as Record<string, LucideIcon>)[icon] || Icons.Hammer;

  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-4">
        <IconComponent className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-heading font-semibold text-slate-dark dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{description}</p>
      <ul className="space-y-2">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <span className="text-primary mt-1">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
