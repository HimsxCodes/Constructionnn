import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Award, Users, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About JB Engineering | 25+ Years of Excellence",
  description:
    "Learn about JB Engineering - a trusted construction company with over 25 years of experience, 500+ completed projects, and a commitment to quality, safety, and customer satisfaction.",
  keywords: [
    "construction company",
    "about construction company",
    "construction history",
    "construction team",
    "construction certifications",
  ],
  openGraph: {
    title: "About JB Engineering | 25+ Years of Excellence",
    description:
      "Learn about JB Engineering - a trusted construction company with over 25 years of experience.",
  },
};

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Uncompromising commitment to quality in every project we undertake.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Zero-tolerance safety policy ensuring secure work environments.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborative approach with clients, partners, and our skilled team.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "Honest, transparent communication and ethical business practices.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-white dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              About JB Engineering
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Building excellence since 1995. Your trusted partner for construction projects of all
              sizes.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <FadeIn direction="right">
              <h2 className="text-3xl font-heading font-bold text-slate-dark dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Founded in 1995, JB Engineering has grown from a small local contractor to
                  one of the region&apos;s most trusted construction companies. With over 25 years
                  of experience, we&apos;ve completed more than 500 projects across residential,
                  commercial, and industrial sectors.
                </p>
                <p>
                  Our success is built on a foundation of quality craftsmanship, reliable service,
                  and unwavering commitment to client satisfaction. We combine traditional building
                  expertise with modern construction techniques and sustainable practices.
                </p>
                <p>
                  Today, our team of 120+ skilled professionals continues to deliver exceptional
                  results, maintaining our reputation for excellence while embracing innovation in
                  construction technology and methods.
                </p>
              </div>
            </FadeIn>

            <FadeIn
              direction="left"
              className="bg-slate-100 dark:bg-slate-800 rounded-lg p-8"
            >
              <h2 className="text-3xl font-heading font-bold text-slate-dark dark:text-white mb-6">
                Why Choose Us
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      25+ Years Experience
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Proven track record of successful projects
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      Licensed & Insured
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Fully licensed, bonded, and insured for your protection
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      Quality Guarantee
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Comprehensive warranty on all workmanship
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-dark dark:text-white">
                      On-Time Delivery
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">
                      Commitment to meeting project deadlines
                    </div>
                  </div>
                </li>
              </ul>
            </FadeIn>
          </div>

          <FadeIn className="mb-16">
            <h2 className="text-4xl font-heading font-bold text-slate-dark dark:text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <FadeIn
                    key={value.title}
                    className="bg-white dark:bg-slate-800 rounded-lg p-6 text-center"
                    delay={index * 0.1}
                  >
                    <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-slate-dark dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {value.description}
                    </p>
                  </FadeIn>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
