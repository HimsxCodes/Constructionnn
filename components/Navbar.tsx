"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import logoImg from "@/images/logo.png";
import logo2Img from "@/images/logo2.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();
  const { theme, mounted } = useTheme();
  const logoSrc = mounted && theme === "dark" ? logo2Img : logoImg;
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Gradient accent line at the very top */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px] bg-gradient-to-r from-primary via-amber-400 to-primary" />

      <nav
        className={`fixed top-[3px] left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-white/60 dark:bg-slate-900/60 backdrop-blur-md"
        }`}
        style={{
          borderBottom: isScrolled
            ? "1px solid rgba(255, 107, 53, 0.08)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-1.5 bg-gradient-to-br from-primary/20 to-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <Image
                  src={logoSrc}
                  alt="JB Engineering Logo"
                  width={36}
                  height={36}
                  className="h-9 w-auto relative z-10"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-heading font-bold tracking-tight text-slate-800 dark:text-white leading-tight">
                  JB Engineering
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-primary/70 dark:text-primary-light/70 leading-none">
                  Building Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center" ref={navRef}>
              <div className="flex items-center gap-1 bg-slate-100/60 dark:bg-white/5 rounded-full px-2 py-1.5 backdrop-blur-sm">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onMouseEnter={() => setHoveredLink(link.href)}
                      onMouseLeave={() => setHoveredLink(null)}
                      className="relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full"
                    >
                      {/* Active / Hover pill background */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm dark:shadow-none"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {hoveredLink === link.href && !isActive && (
                        <motion.div
                          layoutId="hoverNav"
                          className="absolute inset-0 bg-slate-200/50 dark:bg-white/5 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        />
                      )}
                      <span
                        className={`relative z-10 ${
                          isActive
                            ? "text-primary font-semibold"
                            : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 ml-6">
                <ThemeToggle />

                {/* CTA Button */}
                <Link href="/contact" className="group/cta relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-amber-500 rounded-full opacity-60 group-hover/cta:opacity-100 transition-opacity duration-500 blur-sm" />
                  <div className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold text-sm transition-all duration-300 group-hover/cta:shadow-lg">
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Mobile Controls */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-[75px] left-4 right-4 z-50 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-slate-200/50 dark:border-white/10 overflow-hidden"
            >
              <div className="p-5 space-y-1">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-primary/10 text-primary dark:bg-primary/15"
                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="px-5 pb-5">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold text-center transition-all duration-300 shadow-cta hover:shadow-lg"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
