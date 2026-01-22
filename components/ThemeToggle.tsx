"use client";

import { Sun, HardHat } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {theme === "light" ? (
        <HardHat className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </motion.button>
  );
}
