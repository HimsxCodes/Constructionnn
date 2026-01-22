"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-lg p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-green-700 dark:text-green-400 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600 dark:text-green-300">
          We&apos;ve received your message and will get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.name
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600 focus:border-primary"
                } bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors`}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.email
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600 focus:border-primary"
                } bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
                Phone <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.phone
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600 focus:border-primary"
                } bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
                Project Type <span className="text-primary">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 ${
                  errors.projectType
                    ? "border-red-500"
                    : "border-slate-300 dark:border-slate-600 focus:border-primary"
                } bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors`}
                aria-invalid={!!errors.projectType}
                aria-describedby={errors.projectType ? "projectType-error" : undefined}
              >
                <option value="">Select project type</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="renovation">Renovation</option>
              </select>
              {errors.projectType && (
                <p id="projectType-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.projectType}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
              Budget Range
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 focus:border-primary bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors"
            >
              <option value="">Select budget range</option>
              <option value="under-100k">Under $100,000</option>
              <option value="100k-500k">$100,000 - $500,000</option>
              <option value="500k-1m">$500,000 - $1,000,000</option>
              <option value="1m-5m">$1,000,000 - $5,000,000</option>
              <option value="over-5m">Over $5,000,000</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-slate-dark dark:text-white mb-2">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border-2 ${
                errors.message
                  ? "border-red-500"
                  : "border-slate-300 dark:border-slate-600 focus:border-primary"
              } bg-white dark:bg-slate-800 text-slate-dark dark:text-white focus:outline-none transition-colors resize-none`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-cta disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>

      <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-xl font-heading font-bold text-slate-dark dark:text-white mb-4">
            Contact Information
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                123 Construction Ave
                <br />
                Building City, BC 12345
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <a
                href="tel:+1234567890"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm"
              >
                (123) 456-7890
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a
                href="mailto:info@buildpro.com"
                className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors text-sm"
              >
                info@buildpro.com
              </a>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="text-slate-600 dark:text-slate-300 text-sm">
                Monday - Friday: 7AM - 6PM
                <br />
                Saturday: 8AM - 4PM
                <br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
