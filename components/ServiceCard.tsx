"use client";

import { motion } from "framer-motion";
import { LucideIcon, Hammer, Check } from "lucide-react";
import * as Icons from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

// Helper function to safely get icon component
function getIconComponent(iconName: string): LucideIcon {
  const icons = Icons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || icons["Hammer"] || Hammer;
}

export function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const IconComponent = getIconComponent(icon);

  return (
    <motion.div
      className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-card hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 h-full flex flex-col border border-slate-100 dark:border-slate-700 overflow-hidden"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30">
        <IconComponent className="w-8 h-8 text-primary transition-colors duration-300 group-hover:text-white" />
      </div>
      
      <h3 className="relative z-10 text-xl md:text-2xl font-heading font-bold text-slate-dark dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      
      <p className="relative z-10 text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
        {description}
      </p>
      
      <ul className="relative z-10 space-y-3 mt-auto">
        {features.slice(0, 3).map((feature, index) => (
          <motion.li 
            key={index} 
            className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300 font-medium"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary transition-colors duration-200">
              <Check className="w-3 h-3 text-primary group-hover:text-white transition-colors duration-200" strokeWidth={3} />
            </span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
      
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-center" />
    </motion.div>
  );
}

