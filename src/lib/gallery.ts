import learning from "@/assets/gallery-learning.jpg";
import creativity from "@/assets/gallery-creativity.jpg";
import sports from "@/assets/gallery-sports.jpg";
import stem from "@/assets/gallery-stem.jpg";
import campus from "@/assets/campus-architecture.jpg";
import outdoor from "@/assets/gallery-outdoor.jpg";
import events from "@/assets/gallery-events.jpg";

export const GALLERY_CATEGORIES = [
  "All",
  "Learning",
  "Creativity",
  "Sports",
  "STEM",
  "Campus",
  "Events",
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export const GALLERY_ITEMS: {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, "All">;
  alt: string;
}[] = [
  {
    id: "reading",
    src: learning,
    category: "Learning",
    alt: "Children reading books together with a teacher in a bright learning studio",
  },
  {
    id: "arts",
    src: creativity,
    category: "Creativity",
    alt: "Children painting and making crafts around a wooden table in an art studio",
  },
  {
    id: "yoga",
    src: sports,
    category: "Sports",
    alt: "Children stretching on yoga mats in a sunlit wellness studio",
  },
  {
    id: "robotics",
    src: stem,
    category: "STEM",
    alt: "Children building a small robot with an electronics kit in a STEM lab",
  },
  {
    id: "architecture",
    src: campus,
    category: "Campus",
    alt: "KIZUNA campus building with petal-shaped roof and circular glass dome among trees",
  },
  {
    id: "outdoor",
    src: outdoor,
    category: "Sports",
    alt: "Children running and playing outdoors in a landscaped garden",
  },
  {
    id: "garden",
    src: outdoor,
    category: "Campus",
    alt: "Garden play area with trees and a wooden play structure on the campus grounds",
  },
  {
    id: "community",
    src: events,
    category: "Events",
    alt: "Families and children gathered on the campus lawn during a community event",
  },
];
