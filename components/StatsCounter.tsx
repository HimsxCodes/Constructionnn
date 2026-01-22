"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { value: 25, label: "Years of Experience", suffix: "+" },
  { value: 500, label: "Completed Projects", suffix: "+" },
  { value: 450, label: "Satisfied Clients", suffix: "+" },
  { value: 120, label: "Team Members", suffix: "+" },
];

export function StatsCounter() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, delay }: { stat: StatItem; delay: number }) {
  const { count, ref } = useCountUp(stat.value, 2000, 0);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <div className="text-5xl md:text-6xl font-heading font-bold text-primary mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-300 font-medium">{stat.label}</div>
    </motion.div>
  );
}
