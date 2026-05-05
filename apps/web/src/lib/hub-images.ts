export const HUB_IMAGES = [
  "/HUB IMAGES/IMG_9843.JPG",
  "/HUB IMAGES/IMG_9844.JPG",
  "/HUB IMAGES/IMG_9845.JPG",
  "/HUB IMAGES/IMG_9846.JPG",
  "/HUB IMAGES/IMG_9848.JPG",
  "/HUB IMAGES/IMG_9849.JPG",
  "/HUB IMAGES/IMG_9850.JPG",
  "/HUB IMAGES/IMG_9851.JPG",
  "/HUB IMAGES/IMG_9852.JPG",
  "/HUB IMAGES/IMG_9853.JPG",
  "/HUB IMAGES/IMG_9854.JPG",
  "/HUB IMAGES/IMG_9855.JPG",
  "/HUB IMAGES/IMG_9856.JPG",
  "/HUB IMAGES/IMG_9857.JPG",
  "/HUB IMAGES/IMG_9858.JPG",
  "/HUB IMAGES/IMG_9859.JPG",
  "/HUB IMAGES/IMG_9860.JPG",
  "/HUB IMAGES/IMG_9861.JPG",
  "/HUB IMAGES/IMG_9862 (1).JPG",
  "/HUB IMAGES/IMG_9862.JPG",
  "/HUB IMAGES/IMG_9863.JPG",
  "/HUB IMAGES/IMG_9864.JPG",
  "/HUB IMAGES/IMG_9865.JPG",
];

export const HERO_HUB_IMAGES = [
  "/HUB IMAGES/IMG_9865.JPG",
  "/HUB IMAGES/IMG_9864.JPG",
  "/HUB IMAGES/IMG_9863.JPG",
  "/HUB IMAGES/IMG_9862.JPG",
  "/HUB IMAGES/IMG_9861.JPG",
];

export const HOME_GALLERY_ITEMS = [
  {
    id: "hub-1",
    image: HUB_IMAGES[0],
    label: "Innovation Workspace",
    description: "Collaborative spaces for students and builders",
  },
  {
    id: "hub-2",
    image: HUB_IMAGES[1],
    label: "Training Sessions",
    description: "Hands-on learning for emerging technology skills",
  },
  {
    id: "hub-3",
    image: HUB_IMAGES[2],
    label: "Community Events",
    description: "Gatherings that connect ideas with opportunity",
  },
  {
    id: "hub-4",
    image: HUB_IMAGES[3],
    label: "Team Collaboration",
    description: "Flexible spaces for project work and mentoring",
  },
  {
    id: "hub-5",
    image: HUB_IMAGES[4],
    label: "Innovation Showcase",
    description: "Moments from demos, talks, and presentations",
  },
  {
    id: "hub-6",
    image: HUB_IMAGES[5],
    label: "BUK Hub Community",
    description: "Students and innovators shaping new solutions",
  },
];

const galleryTitles = [
  "Opening Moment",
  "Hub Tour",
  "Innovation Session",
  "Collaborative Learning",
  "Student Builders",
  "Mentorship Circle",
  "Team Discussion",
  "Technology Workshop",
  "Project Showcase",
  "Community Meetup",
  "Learning Lab",
  "Startup Conversation",
  "Focused Work",
  "Presentation Session",
  "Innovation Briefing",
  "Hands-on Practice",
  "Hub Experience",
  "Builder Network",
  "Campus Innovation",
  "Research Exchange",
  "Program Activity",
  "Creative Collaboration",
  "BUK Innovation Hubs",
];

export const FULL_GALLERY_CATEGORIES = [
  {
    category: "Hub Spaces",
    items: HUB_IMAGES.slice(0, 6).map((image, index) => ({
      id: `space-${index + 1}`,
      image,
      title: galleryTitles[index],
      description: "A look inside the spaces powering student innovation at BUK.",
    })),
  },
  {
    category: "Programs & Workshops",
    items: HUB_IMAGES.slice(6, 12).map((image, index) => ({
      id: `program-${index + 1}`,
      image,
      title: galleryTitles[index + 6],
      description: "Program moments from training, mentoring, and practical sessions.",
    })),
  },
  {
    category: "Community & Collaboration",
    items: HUB_IMAGES.slice(12, 18).map((image, index) => ({
      id: `community-${index + 1}`,
      image,
      title: galleryTitles[index + 12],
      description: "Students, teams, and partners working together across the hub.",
    })),
  },
  {
    category: "Events & Showcases",
    items: HUB_IMAGES.slice(18).map((image, index) => ({
      id: `event-${index + 1}`,
      image,
      title: galleryTitles[index + 18],
      description: "Highlights from hub events, showcases, and innovation activities.",
    })),
  },
];
