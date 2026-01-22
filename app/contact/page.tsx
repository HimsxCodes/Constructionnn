import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Contact BuildPro Construction | Get a Free Quote",
  description:
    "Contact BuildPro Construction for your next project. Get a free quote for residential, commercial, or industrial construction services. We're here to help bring your vision to life.",
  keywords: [
    "contact construction company",
    "construction quote",
    "free construction estimate",
    "construction consultation",
  ],
  openGraph: {
    title: "Contact BuildPro Construction | Get a Free Quote",
    description: "Contact us for your next construction project. Get a free quote today.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-white dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Ready to start your construction project? Contact us today for a free consultation
              and quote. Our team is here to help bring your vision to life.
            </p>
          </FadeIn>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
