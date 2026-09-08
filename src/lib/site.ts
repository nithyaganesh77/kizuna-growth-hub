// Configurable placeholders — replace with the client's real details.
export const SITE_PHONE = "+00 00000 00000";
export const SITE_EMAIL = "hello@kizuna.example";
export const SITE_ADDRESS = "Campus address to be confirmed";
export const SITE_HOURS = "Opening hours to be confirmed";
export const MAP_URL = "#";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "LinkedIn", href: "#" },
] as const;

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About KIZUNA", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Why KIZUNA", to: "/why-kizuna" },
  { label: "Campus", to: "/campus" },
  { label: "Parent Corner", to: "/parent-corner" },
  { label: "Contact", to: "/contact" },
] as const;

export const VISION =
  "To reimagine childhood beyond academics, creating a world where every child is inspired to discover, empowered to grow, connected through meaningful bonds, and prepared to thrive as a confident, compassionate, and future-ready individual.";

export const MISSION =
  "To redefine after-school learning by providing holistic developmental experiences that foster curiosity, character, connection, and competence, empowering every child to thrive in life and contribute meaningfully to society.";

export const PURPOSE =
  "KIZUNA aims to create confident, creative, and future-ready children.";

export const BELIEF =
  "Every child deserves a place where learning continues beyond the bell.";

export const SOLUTION =
  "KIZUNA provides a nurturing environment where children learn, explore, create, play, and grow beyond school hours while supporting parents with reliable childcare and enrichment programs.";

export const NATIONAL_VISION =
  "KIZUNA aspires to become a benchmark for future-ready child development campuses. More than an educational venture, it is a long-term commitment to nurturing confident individuals, strengthening families, and shaping a generation equipped to lead, innovate, and contribute to society. Through sustainable growth, scalable impact, and an unwavering focus on holistic development, KIZUNA aims to emerge as a nationally recognized model that transforms the way children learn, grow, and experience the world beyond the classroom.";

export const KEY_DIFFERENTIATOR =
  "KIZUNA is not a tuition centre, daycare centre, or activity centre. It is an integrated Child Development Campus that combines learning, care, creativity, wellness, life skills, and exploration under one roof.";

export const CAMPUS_HIGHLIGHTS = [
  { title: "Universe Circle", description: "Signature feature — a space for wonder, gathering and discovery." },
  { title: "Flower-Inspired Learning Dome", description: "A light-filled, organic learning environment shaped around childhood curiosity." },
  { title: "Telescope & Sky Observation Zone", description: "Stargazing and sky-watching experiences that expand young minds." },
  { title: "Mini Planetarium Experience", description: "Immersive journeys through space and science." },
  { title: "Solar-Powered Green Campus", description: "Sustainable design woven into everyday learning." },
  { title: "Learning Studios & Reading Corners", description: "Calm, inviting spaces for focus, reading and guided study." },
  { title: "Outdoor Play & Wellness Spaces", description: "Gardens, play zones and movement areas for healthy bodies and minds." },
] as const;

export const FEATURES = [
  {
    icon: "book",
    title: "Academic Support",
    text: "Homework guidance, reading enhancement, spoken English and public speaking support.",
    tone: "gold",
  },
  {
    icon: "heart",
    title: "Childcare & Extended Day",
    text: "A safe, nurturing environment with structured activities, meaningful routines and free play.",
    tone: "coral",
  },
  {
    icon: "palette",
    title: "Creative Growth",
    text: "Arts, crafts, music and drama encourage children to express themselves creatively.",
    tone: "apricot",
  },
  {
    icon: "activity",
    title: "Fitness & Wellness",
    text: "Sports, yoga and wellness experiences encourage healthy bodies and active minds.",
    tone: "leaf",
  },
  {
    icon: "compass",
    title: "Life Skills & Leadership",
    text: "Teamwork, resilience, emotional development and leadership are woven into everyday experiences.",
    tone: "sky",
  },
  {
    icon: "bot",
    title: "STEM & Robotics",
    text: "Hands-on science, technology, engineering and robotics projects inspire curiosity and problem-solving.",
    tone: "navy",
  },
] as const;

export const PROGRAMS = [
  {
    id: "academic-support",
    number: "01",
    title: "Core Academic Support",
    description:
      "Homework guidance, reading enhancement, spoken English and public speaking — building foundational skills through daily support.",
    features: ["Homework guidance", "Reading enhancement", "Spoken English", "Public speaking"],
    cta: "Learn More",
    icon: "book",
    tone: "gold",
  },
  {
    id: "childcare",
    number: "02",
    title: "Childcare & Extended Day",
    description:
      "A safe, nurturing environment for working families, combining structured activities, social interaction and free play.",
    features: ["Safe environment", "Structured activities", "Free play", "Extended-day support"],
    cta: "Learn More",
    icon: "heart",
    tone: "coral",
  },
  {
    id: "creative-physical",
    number: "03",
    title: "Creative & Physical Growth",
    description:
      "Experiences in arts, crafts, music, drama, sports, yoga and wellness that encourage creativity and healthy bodies.",
    features: ["Arts", "Crafts", "Music", "Drama", "Sports", "Yoga", "Wellness"],
    cta: "Explore Activities",
    icon: "palette",
    tone: "apricot",
  },
  {
    id: "life-skills",
    number: "04",
    title: "Life Skills & Leadership",
    description:
      "Emotional development, teamwork, resilience and leadership are woven into everyday experiences.",
    features: ["Teamwork", "Emotional development", "Resilience", "Leadership"],
    cta: "Learn More",
    icon: "compass",
    tone: "sky",
  },
  {
    id: "stem-robotics",
    number: "05",
    title: "STEM & Robotics",
    description:
      "Hands-on exposure to science, technology, engineering and robotics through engaging projects.",
    features: ["Science", "Technology", "Engineering", "Robotics", "Hands-on projects"],
    cta: "Explore STEM",
    icon: "bot",
    tone: "leaf",
  },
  {
    id: "camps",
    number: "06",
    title: "Holiday Camps & Weekend Academies",
    description:
      "Seasonal enrichment and weekend skill-building experiences for deeper exploration.",
    features: ["Holiday enrichment", "Weekend learning", "Skill-building", "Exploration"],
    cta: "View Experiences",
    icon: "sun",
    tone: "gold",
  },
] as const;

export const AGE_GROUPS = [
  {
    id: "1.5-3",
    label: "1.5–3 Years",
    summary: "Early discovery, care, movement and social development.",
    categories: ["Childcare & Extended Day", "Movement & Play", "Early Social Development"],
  },
  {
    id: "3-6",
    label: "3–6 Years",
    summary: "Creative exploration, communication, play and foundational learning.",
    categories: [
      "Creative Growth",
      "Communication & Language",
      "Childcare & Extended Day",
      "Movement & Play",
    ],
  },
  {
    id: "6-9",
    label: "6–9 Years",
    summary: "Academic support, creativity, fitness, STEM and life skills.",
    categories: [
      "Core Academic Support",
      "Creative & Physical Growth",
      "STEM & Robotics",
      "Life Skills & Leadership",
    ],
  },
  {
    id: "9-12",
    label: "9–12 Years",
    summary: "Leadership, communication, STEM, resilience and future-ready skills.",
    categories: [
      "Life Skills & Leadership",
      "STEM & Robotics",
      "Public Speaking & Communication",
      "Holiday Camps & Weekend Academies",
    ],
  },
] as const;

export const ECOSYSTEM = [
  { key: "LEARN", label: "Academic Support", tone: "gold" },
  { key: "CREATE", label: "Arts & Creativity", tone: "apricot" },
  { key: "MOVE", label: "Sports & Wellness", tone: "leaf" },
  { key: "CONNECT", label: "Communication & Relationships", tone: "coral" },
  { key: "DISCOVER", label: "STEM & Robotics", tone: "sky" },
  { key: "GROW", label: "Life Skills & Leadership", tone: "gold" },
] as const;

export const PILLARS = [
  { title: "Parent Partnership", text: "Regular collaboration with families." },
  {
    title: "Experiential Learning",
    text: "Hands-on activities that encourage children to learn through doing.",
  },
  { title: "Future-Ready Skills", text: "Leadership, resilience and emotional intelligence." },
  {
    title: "Integrated Development",
    text: "Multiple developmental dimensions brought together under one ecosystem.",
  },
] as const;

export const DAY_TIMELINE = [
  { key: "ARRIVE", text: "Welcome & settling in", icon: "sun" },
  { key: "LEARN", text: "Academic guidance & reading", icon: "book" },
  { key: "CREATE", text: "Arts, music & creative exploration", icon: "palette" },
  { key: "MOVE", text: "Sports, yoga & active play", icon: "activity" },
  { key: "DISCOVER", text: "STEM, projects & curiosity", icon: "bot" },
  { key: "CONNECT", text: "Teamwork, communication & reflection", icon: "users" },
  { key: "GO HOME", text: "A day of meaningful experiences", icon: "home" },
] as const;

export const PARENT_BENEFITS = [
  {
    number: "01",
    title: "Peace of Mind",
    text: "Know that your child is spending their time in a safe, nurturing and enriching environment.",
  },
  {
    number: "02",
    title: "One Connected Experience",
    text: "Reduce the complexity of coordinating different learning and activity experiences.",
  },
  {
    number: "03",
    title: "A Broader View of Growth",
    text: "Support your child's academic, physical, creative, social and emotional development.",
  },
] as const;

// Replace with real parent testimonials when available.
export const TESTIMONIALS = [
  { id: 1, quote: "Parent testimonial will appear here.", author: "Parent name", meta: "Child age" },
  { id: 2, quote: "Parent testimonial will appear here.", author: "Parent name", meta: "Child age" },
  { id: 3, quote: "Parent testimonial will appear here.", author: "Parent name", meta: "Child age" },
] as const;

export const FAQS = [
  {
    q: "What age groups does KIZUNA serve?",
    a: "KIZUNA is designed for children ages 1.5–12.",
  },
  {
    q: "What programs are available?",
    a: "KIZUNA brings together academic support, childcare and extended-day experiences, communication, creative and physical growth, life skills, STEM & robotics, and seasonal enrichment.",
  },
  {
    q: "Is KIZUNA only focused on academics?",
    a: "No. KIZUNA is designed around holistic child development beyond academics.",
  },
  {
    q: "What is the approach to learning?",
    a: "KIZUNA emphasizes experiential learning, meaningful relationships, creativity, communication and future-ready skills alongside academic support.",
  },
  {
    q: "Do parents participate in the development journey?",
    a: "Parent partnership is an important part of the KIZUNA approach.",
  },
  {
    q: "How can I visit the campus?",
    a: "Use the Book a Visit form to request a campus visit.",
  },
  {
    q: "How do I know which program is right for my child?",
    a: "Use the age-based program finder or contact the KIZUNA team for guidance.",
  },
] as const;

export const ENQUIRY_TYPES = [
  "Programs",
  "Campus Visit",
  "Childcare",
  "Academic Support",
  "STEM & Robotics",
  "Holiday Camps",
  "General Enquiry",
] as const;

export const LEARNING_SPACES = [
  { title: "Creative Studios", text: "Space for art, craft, music and drama." },
  { title: "Learning Spaces", text: "Calm areas for reading and academic guidance." },
  { title: "STEM & Robotics", text: "Hands-on making, building and experimenting." },
  { title: "Activity Areas", text: "Room for group activities and free play." },
  { title: "Wellness Spaces", text: "Quiet areas for yoga, movement and rest." },
  { title: "Outdoor Play", text: "Gardens, greenery and open-air exploration." },
] as const;
