"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowRight, Headset } from "lucide-react";
import { validateEmail, validatePhone } from "@/lib/validation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

const inputBaseClasses =
  "w-full px-4 py-3.5 rounded-xl border-2 bg-white dark:bg-slate-800/80 text-slate-800 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all duration-200 focus:ring-4";

const getInputClasses = (hasError: boolean) =>
  `${inputBaseClasses} ${
    hasError
      ? "border-red-400 dark:border-red-500/70 focus:border-red-500 focus:ring-red-500/10"
      : "border-slate-200 dark:border-slate-700 focus:border-primary focus:ring-primary/10 hover:border-slate-300 dark:hover:border-slate-600"
  }`;

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          projectType: formData.projectType,
          budget: formData.budget || null,
          message: formData.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        alert(data?.error ?? "Something went wrong. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="relative max-w-2xl mx-auto bg-white dark:bg-slate-800 border border-green-200 dark:border-green-500/30 rounded-3xl p-12 text-center overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/10" />
        <div className="relative z-10">
          <motion.div
            className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/25"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h3
            className="text-3xl font-heading font-bold text-slate-800 dark:text-white mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Thank You!
          </motion.h3>
          <motion.p
            className="text-slate-600 dark:text-slate-300 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            We&apos;ve received your message and will get back to you within 24 hours.
          </motion.p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
      {/* Form Side */}
      <div className="w-full lg:flex-1">
        <div className="bg-white dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200/60 dark:border-slate-700/60">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Send className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold text-slate-800 dark:text-white">
                Send a Message
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Fill out the form and we&apos;ll respond promptly
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClasses(!!errors.name)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      id="name-error"
                      className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClasses(!!errors.email)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Phone <span className="text-primary">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className={getInputClasses(!!errors.phone)}
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                <AnimatePresence>
                  {errors.phone && (
                    <motion.p
                      id="phone-error"
                      className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Project Type <span className="text-primary">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={getInputClasses(!!errors.projectType)}
                  aria-invalid={!!errors.projectType}
                  aria-describedby={errors.projectType ? "projectType-error" : undefined}
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                  <option value="renovation">Renovation</option>
                </select>
                <AnimatePresence>
                  {errors.projectType && (
                    <motion.p
                      id="projectType-error"
                      className="mt-2 text-sm text-red-500 flex items-center gap-1"
                      role="alert"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                    >
                      {errors.projectType}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={getInputClasses(false)}
              >
                <option value="">Select budget range</option>
                <option value="under-50l">Under ₹50 Lakh</option>
                <option value="50l-2cr">₹50 Lakh - ₹2 Crore</option>
                <option value="2cr-5cr">₹2 Crore - ₹5 Crore</option>
                <option value="5cr-25cr">₹5 Crore - ₹25 Crore</option>
                <option value="over-25cr">Over ₹25 Crore</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your project..."
                className={`${getInputClasses(!!errors.message)} resize-none`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <AnimatePresence>
                {errors.message && (
                  <motion.p
                    id="message-error"
                    className="mt-2 text-sm text-red-500 flex items-center gap-1"
                    role="alert"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="group relative w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold text-lg shadow-cta disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              {isSubmitting ? (
                <>
                  <div className="relative z-10 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="relative z-10">Submitting...</span>
                </>
              ) : (
                <>
                  <Send className="relative z-10 w-5 h-5" />
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="relative z-10 w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </div>

      {/* Contact Info Side */}
      <div className="w-full lg:max-w-sm lg:sticky lg:top-28">
        <div className="bg-white dark:bg-slate-800/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-700/60">
          {/* Header accent */}
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-700 dark:to-slate-800 p-8 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Headset className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white">
                Contact Information
              </h3>
            </div>
          </div>

          <div className="p-6 space-y-1">
            {/* Address */}
            <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">Address</p>
                <p className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                  B/1, Karnavati Park Shopping, Nikol Gam Rd, opp. Mansarovar Complex, Nikol, Ahmedabad, Gujarat 382350
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">Phone</p>
                <a
                  href="tel:+917016475798"
                  className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                >
                  +91 7016475798
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">Email</p>
                <a
                  href="mailto:jbengineering96@gmail.com"
                  className="text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors text-sm font-medium"
                >
                  jbengineering96@gmail.com
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors mt-0.5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold mb-1">Business Hours</p>
                <div className="text-slate-700 dark:text-slate-200 text-sm space-y-1">
                  <div className="flex justify-between gap-6">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-primary">7AM - 6PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Saturday</span>
                    <span className="font-medium text-primary">8AM - 4PM</span>
                  </div>
                  <div className="flex justify-between gap-6">
                    <span>Sunday</span>
                    <span className="font-medium text-slate-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
