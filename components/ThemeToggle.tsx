"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative w-10 h-10 flex items-center justify-center rounded-full overflow-hidden transition-colors duration-500 ease-in-out ${
        isDark ? "bg-slate-800 border-slate-700" : "bg-sky-300 border-sky-200"
      } border shadow-inner hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-slate-900 group`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <div className="relative w-full h-full flex items-center justify-center z-10">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ y: -20, opacity: 0, rotate: -90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: 20, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
              className="text-yellow-100"
            >
              <Moon className="w-5 h-5 fill-current" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: 90 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 10 }}
              className="text-amber-500"
            >
              <Sun className="w-6 h-6 fill-current drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Clouds in light mode */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{ opacity: isDark ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="absolute w-5 h-2 bg-white/70 rounded-full top-[60%] -left-1"
          animate={{ x: isDark ? -10 : 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute w-4 h-[6px] bg-white/70 rounded-full top-[75%] left-5"
          animate={{ x: isDark ? 10 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </motion.div>

      {/* Stars in dark mode */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={false}
        animate={{ opacity: isDark ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-[20%] left-[25%] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_2px_white] animate-pulse" />
        <div className="absolute top-[35%] left-[75%] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_2px_white] animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="absolute top-[75%] left-[35%] w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_2px_white] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[80%] left-[70%] w-[1.5px] h-[1.5px] bg-white rounded-full shadow-[0_0_2px_white] animate-pulse" style={{ animationDelay: '0.7s' }} />
      </motion.div>
    </motion.button>
  );
}
