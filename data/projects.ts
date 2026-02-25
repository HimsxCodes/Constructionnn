import { Project } from "@/types/project";
import bridgeImg from "@/images/bridge-pillar-reinforcement.png";
import mallImg from "@/images/mall-floor-cutting.png";
import cableImg from "@/images/cable-trenching-tech-park.png";
import hospitalImg from "@/images/hospital-hvac-core-cutting.png";
import factoryAfterImg from "@/images/factory-demolition-after.png";
import factoryBeforeImg from "@/images/factory-demolition-before.png";
import heavyImg from "@/images/heavy-machinery-anchoring.png";
import damImg from "@/images/dam-wire-saw-cutting.png";
import metroImg from "@/images/metro-station-rebar.png";

import bridgeImg2 from "@/images/bridge-pillar-reinforcement-2.png";
import mallImg2 from "@/images/mall-floor-cutting-2.png";
import cableImg2 from "@/images/cable-trenching-tech-park-2.png";
import hospitalImg2 from "@/images/hospital-hvac-core-cutting-2.png";
import heavyImg2 from "@/images/heavy-machinery-anchoring-2.png";
import damImg2 from "@/images/dam-wire-saw-cutting-2.png";
import metroImg2 from "@/images/metro-station-rebar-2.png";

export const projects: Project[] = [
  {
    id: "1",
    title: "Bridge Pillar Reinforcement",
    category: "industrial",
    description:
      "Heavy duty chemical anchor fastening and rebar fixing for a massive concrete bridge pillar reinforcement project. Handled cracked masonry conditions with high-load anchoring, ensuring stability and long-term durability.",
    location: "State Highway 42",
    duration: "4 weeks",
    completionDate: "2024-05-12",
    budget: 850000,
    clientName: "State Department of Transportation",
    images: [bridgeImg.src, bridgeImg2.src],
    featured: true,
  },
  {
    id: "2",
    title: "Commercial Mall Floor Modification",
    category: "commercial",
    description:
      "Precision RCC concrete slab floor cutting for opening creation in a busy commercial mall setting. Handled with strict zero vibration and advanced noise control measures to avoid disturbing retail operations.",
    location: "Downtown City Center",
    duration: "2 weeks",
    completionDate: "2024-02-28",
    budget: 320000,
    clientName: "Retail Properties Group",
    images: [mallImg.src, mallImg2.src],
    featured: true,
  },
  {
    id: "3",
    title: "Underground Cable Trenching for Tech Park",
    category: "industrial",
    description:
      "Precise straight groove cutting and trenching in an asphalt road to lay critical underground power and fiber optic cables. Ensured minimal traffic disruption and perfect groove filling post-installation.",
    location: "Innovation Tech Park",
    duration: "3 weeks",
    completionDate: "2023-11-15",
    budget: 450000,
    clientName: "Tech Hub Infrastructure",
    images: [cableImg.src, cableImg2.src],
    featured: false,
  },
  {
    id: "4",
    title: "HVAC Duct Openings for New Hospital",
    category: "commercial",
    description:
      "Diamond core precision cutting through thick reinforced concrete walls to create perfect circular openings for large medical-grade HVAC ducts. Executed with a dust-free wet drilling setup.",
    location: "General Hospital East Wing",
    duration: "5 weeks",
    completionDate: "2023-09-10",
    budget: 620000,
    clientName: "Healthcare Facilities Board",
    images: [hospitalImg.src, hospitalImg2.src],
    featured: true,
  },
  {
    id: "5",
    title: "Old Factory Selective Demolition",
    category: "renovation",
    description:
      "Controlled selective demolition and strip-out of an old factory interior using modern hydraulic breakers and targeted demolition techniques. Completed with full structural integrity checks and thorough debris disposal.",
    location: "North Industrial District",
    duration: "8 weeks",
    completionDate: "2024-01-20",
    budget: 1250000,
    clientName: "Urban Redevelopment LLC",
    images: [
      factoryAfterImg.src,
      factoryBeforeImg.src,
    ],
    beforeImage: factoryBeforeImg.src,
    afterImage: factoryAfterImg.src,
    featured: true,
  },
  {
    id: "6",
    title: "Heavy Machinery Anchor Installation",
    category: "industrial",
    description:
      "Deep concrete drilling and high-strength chemical anchoring into a smooth, thick concrete floor. Created mounting points that comply with strict load standards for massive industrial manufacturing equipment.",
    location: "Auto Manufacturing Plant",
    duration: "2 weeks",
    completionDate: "2023-10-05",
    budget: 210000,
    clientName: "Global Auto Industries",
    images: [heavyImg.src, heavyImg2.src],
    featured: false,
  },
  {
    id: "7",
    title: "Hydropower Dam Wall Modification",
    category: "industrial",
    description:
      "Massive scale wire saw cutting through extremely thick mass concrete elements of a hydropower dam. Reached depths traditional saws couldn't approach, executing precision modifications with minimal vibration.",
    location: "River Valley Dam",
    duration: "6 weeks",
    completionDate: "2023-08-30",
    budget: 2800000,
    clientName: "National Energy Authority",
    images: [damImg.src, damImg2.src],
    featured: true,
  },
  {
    id: "8",
    title: "Metro Station Platform Reinforcement",
    category: "commercial",
    description:
      "Heavy steel reinforcement fixing and highly accurate rebar layout for a massive elevated metro station deck. Operations strictly adhered to bar bending schedules and rigorous structural engineers' inspections.",
    location: "Central Metro Hub",
    duration: "10 weeks",
    completionDate: "2024-04-15",
    budget: 1550000,
    clientName: "City Transport Corporation",
    images: [metroImg.src, metroImg2.src],
    featured: true,
  },
];
