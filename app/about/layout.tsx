import type { Metadata } from "next";

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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
