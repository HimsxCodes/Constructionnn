import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Award, Users, Shield, Target, Eye, Rocket, TrendingUp, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "About JB Engineering Construction | Excellence Since 2024",
  description:
    "Learn about JB Engineering Construction - a name known for integrity and excellence since 2024. Providing value that makes a positive difference.",
  keywords: [
    "construction company",
    "JB Engineering",
    "integrity and excellence",
    "local employment construction",
    "value driven construction",
  ],
  openGraph: {
    title: "About JB Engineering Construction | Excellence Since 2024",
    description:
      "Learn about JB Engineering Construction - where integrity meets excellence in every project.",
  },
};

const values = [
  {
    icon: Target,
    title: "Uncompromising Excellence",
    description: "We believe in not just getting the job done, but mastering it with absolute precision.",
  },
  {
    icon: Award,
    title: "Unyielding Integrity",
    description: "Our foundation is built on honesty and ethical standards that never waver.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "Complete visibility in every deal and project, building trust that lasts a lifetime.",
  },
  {
    icon: Rocket,
    title: "Value-Driven Impact",
    description: "We extract maximum value from every project, ensuring your investment makes a difference.",
  },
];

const communityImpact = [
  {
    icon: Users,
    title: "Local Employment",
    description: "We empower local youth through specialized training, fostering self-reliance and growth.",
  },
  {
    icon: Handshake,
    title: "Community Trust",
    description: "Business is more than profit; it's about building a legacy within our community.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-b from-slate-100 dark:from-slate-900 to-white dark:to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-slate-dark dark:text-white mb-6">
              The JB Engineering Legacy
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto italic">
              &quot;Whether the job is small or large, our hard work and quality are always the same.&quot;
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <FadeIn direction="right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-dark dark:text-white mb-4 flex items-center gap-3">
                    <Eye className="text-primary" /> Our Vision
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    To etch the JB Engineering name into the bedrock of the technology and service sector,
                    defined forever by unyielding integrity and absolute excellence. We strive to be
                    the standard by which others are measured.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-heading font-bold text-slate-dark dark:text-white mb-4 flex items-center gap-3">
                    <Target className="text-primary" /> Our Mission
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    To infuse every project—from the most modest to the most monumental—with a
                    &apos;Value&apos; that resonates in our clients&apos; lives and legacies. We do not just
                    build; we master the craft of difference, ensuring every client feels the impact of our dedication.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn
              direction="left"
              className="bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl"
            >
              <h2 className="text-3xl font-heading font-bold text-slate-dark dark:text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-primary" /> Our Success Story
              </h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    Triumphs forged in steel and stone across diverse sectors.
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">90%</div>
                  <div className="text-slate-600 dark:text-slate-300 font-medium">
                    Client retention rate—an ironclad testament to the trust we build.
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-slate-700">
                  Established on September 3, 2024, our rapid ascent is fueled by a commitment
                  to quality that never wavers, regardless of project scale.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="mb-20">
            <FadeIn className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-slate-dark dark:text-white mb-4">
                Core Values
              </h2>
              <p className="text-slate-600 dark:text-slate-300">
                The pillars that support every brick we lay and every deal we sign.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <FadeIn
                    key={value.title}
                    className="bg-white dark:bg-slate-800 rounded-xl p-6 text-center shadow-md border border-slate-100 dark:border-slate-700"
                    delay={index * 0.1}
                  >
                    <div className="w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
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
          </div>

          <FadeIn className="bg-primary/5 dark:bg-primary/10 rounded-3xl p-12 border border-primary/20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-heading font-bold text-slate-dark dark:text-white mb-4">
                Community & Beyond
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                We believe that business is not just about profit,
                it&apos;s about elevating the lives around us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communityImpact.map((impact) => {
                const IconComponent = impact.icon;
                return (
                  <div key={impact.title} className="flex gap-6 items-start">
                    <div className="shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center shadow-sm">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-dark dark:text-white mb-2">{impact.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300">{impact.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
