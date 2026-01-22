export type ProjectCategory = "residential" | "commercial" | "industrial" | "renovation";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  location: string;
  duration: string;
  completionDate: string;
  budget?: number;
  clientName?: string;
  images: string[];
  beforeImage?: string;
  afterImage?: string;
  featured: boolean;
}
