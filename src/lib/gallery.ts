import learning from "@/assets/gallery-learning.jpg";
import creativity from "@/assets/gallery-creativity.jpg";
import sports from "@/assets/gallery-sports.jpg";
import stem from "@/assets/gallery-stem.jpg";
import campusAerialAsset from "@/assets/campus-aerial.png.asset.json";
import universeCircleAsset from "@/assets/universe-circle.png.asset.json";
import campusDomeDayAsset from "@/assets/campus-dome-day.png.asset.json";
import skyObservationAsset from "@/assets/sky-observation.png.asset.json";
import campusSunsetAsset from "@/assets/campus-sunset.png.asset.json";
import telescopeZoneAsset from "@/assets/telescope-zone.png.asset.json";
import outdoor from "@/assets/gallery-outdoor.jpg";
import events from "@/assets/gallery-events.jpg";
import waterslideAsset from "@/assets/photo-waterslide.jpg.asset.json";
import climbingAsset from "@/assets/photo-climbing.jpg.asset.json";
import gardeningAsset from "@/assets/photo-gardening.jpg.asset.json";
import numberlogsAsset from "@/assets/photo-numberlogs.jpg.asset.json";
import birdfeedersAsset from "@/assets/photo-birdfeeders.jpg.asset.json";
import pigeonsAsset from "@/assets/photo-pigeons.jpg.asset.json";
import runningAsset from "@/assets/photo-running.jpg.asset.json";
import playdoughAsset from "@/assets/photo-playdough.jpg.asset.json";

export const PHOTOS = {
  campusAerial: campusAerialAsset.url,
  universeCircle: universeCircleAsset.url,
  campusDomeDay: campusDomeDayAsset.url,
  skyObservation: skyObservationAsset.url,
  campusSunset: campusSunsetAsset.url,
  telescopeZone: telescopeZoneAsset.url,
  waterslide: waterslideAsset.url,
  climbing: climbingAsset.url,
  gardening: gardeningAsset.url,
  numberlogs: numberlogsAsset.url,
  birdfeeders: birdfeedersAsset.url,
  pigeons: pigeonsAsset.url,
  running: runningAsset.url,
  playdough: playdoughAsset.url,
};

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
    src: PHOTOS.campusAerial,
    category: "Campus",
    alt: "Aerial view of the KIZUNA flower-inspired campus surrounded by gardens and play spaces",
  },
  {
    id: "universe-circle",
    src: PHOTOS.universeCircle,
    category: "Campus",
    alt: "The open-air Universe Circle at KIZUNA framing a bright blue sky",
  },
  {
    id: "dome-day",
    src: PHOTOS.campusDomeDay,
    category: "Campus",
    alt: "Children looking up through the daylight-filled circular learning dome",
  },
  {
    id: "sky-observation",
    src: PHOTOS.skyObservation,
    category: "STEM",
    alt: "Children observing the Milky Way from the KIZUNA sky observation courtyard",
  },
  {
    id: "telescope-zone",
    src: PHOTOS.telescopeZone,
    category: "STEM",
    alt: "Children exploring the night sky with a telescope inside the learning dome",
  },
  {
    id: "campus-sunset",
    src: PHOTOS.campusSunset,
    category: "Campus",
    alt: "Children overlooking the illuminated KIZUNA campus at sunset",
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
  {
    id: "gardening",
    src: PHOTOS.gardening,
    category: "Learning",
    alt: "Children planting seedlings and watering a raised garden bed together",
  },
  {
    id: "numberlogs",
    src: PHOTOS.numberlogs,
    category: "Learning",
    alt: "Wooden log stepping stones numbered one to fifteen laid out on grass for counting play",
  },
  {
    id: "birdfeeders",
    src: PHOTOS.birdfeeders,
    category: "Campus",
    alt: "Garden bird feeders with small birds visiting, part of the nature corner",
  },
  {
    id: "pigeons",
    src: PHOTOS.pigeons,
    category: "Campus",
    alt: "A child kneeling outdoors and gently feeding pigeons",
  },
  {
    id: "climbing",
    src: PHOTOS.climbing,
    category: "Sports",
    alt: "Children climbing and balancing on a large red rope climbing frame",
  },
  {
    id: "waterslide",
    src: PHOTOS.waterslide,
    category: "Sports",
    alt: "Colourful inflatable water slide with a splash pool for summer play days",
  },
  {
    id: "running",
    src: PHOTOS.running,
    category: "Sports",
    alt: "A group of children running happily together across a grassy park",
  },
  {
    id: "playdough",
    src: PHOTOS.playdough,
    category: "Creativity",
    alt: "Toddlers rolling and cutting colourful playdough shapes at a craft table",
  },
];
