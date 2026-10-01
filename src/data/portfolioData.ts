import { ProjectItem, SkillItem, DecorativeAsset } from "../types";

// Curated high-res 3D digital art and renders matching the 3D-inspired aesthetic
export const MARQUEE_IMAGES_ROW1: string[] = [
  "https://cdn.simpleicons.org/react/61DAFB",
  "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
  "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  "https://cdn.simpleicons.org/html5/E34F26",
  "https://cdn.simpleicons.org/javascript/F7DF1E",
  "https://cdn.simpleicons.org/typescript/3178C6",
  // "https://cdn.simpleicons.org/css3/1572B6",
];

export const MARQUEE_IMAGES_ROW2: string[] = [
  "https://cdn.simpleicons.org/git/F05032",
  "https://cdn.simpleicons.org/github/FFFFFF",
  "https://cdn.simpleicons.org/docker/2496ED",
  "https://cdn.simpleicons.org/cplusplus/00599C",
  "https://cdn.simpleicons.org/nodedotjs/339933",
  "https://cdn.simpleicons.org/supabase/3FCF8E",
  "https://cdn.simpleicons.org/framer/FFFFFF",
];

// All 21 images combined
export const ALL_MARQUEE_IMAGES = [
  ...MARQUEE_IMAGES_ROW1,
  ...MARQUEE_IMAGES_ROW2,
];

// Four decorative 3D floating images for the corners of About section
export const ABOUT_DECORATIVE_ASSETS: DecorativeAsset[] = [
  {
    id: "about-decor-top-left",
    url: "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?auto=format&fit=crop&w=400&q=80",
    alt: "3D Torus chrome sculpture",
    positionClass: "top-8 left-4 sm:left-10 md:left-16",
    sizeClass: "w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48",
    rotation: -12,
  },
  {
    id: "about-decor-top-right",
    url: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=400&q=80",
    alt: "3D Floating glass crystal",
    positionClass: "top-12 right-4 sm:right-10 md:right-20",
    sizeClass: "w-28 h-28 sm:w-40 sm:h-40 md:w-52 md:h-52",
    rotation: 15,
  },
  {
    id: "about-decor-bottom-left",
    url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=400&q=80",
    alt: "3D Refraction prism",
    positionClass: "bottom-10 left-6 sm:left-14 md:left-24",
    sizeClass: "w-24 h-24 sm:w-36 sm:h-36 md:w-44 md:h-44",
    rotation: 8,
  },
  {
    id: "about-decor-bottom-right",
    url: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=400&q=80",
    alt: "3D Metallic sphere",
    positionClass: "bottom-14 right-6 sm:right-12 md:right-20",
    sizeClass: "w-28 h-28 sm:w-38 sm:h-38 md:w-48 md:h-48",
    rotation: -18,
  },
];

// Skills data exact as specified
export const SKILLS_DATA: SkillItem[] = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building modern, responsive, and interactive web applications with React, Next.js, TypeScript, JavaScript, HTML, CSS, and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building REST APIs and backend services with NestJS, working with Prisma and PostgreSQL to handle data, business logic, and application architecture.",
  },
  {
    number: "03",
    title: "Programming",
    description:
      "Strong programming fundamentals developed through C and C++, with experience in data structures, algorithms, memory management, processes, and networking.",
  },
  {
    number: "04",
    title: "Database & APIs",
    description:
      "Working with PostgreSQL and Prisma for database management, and building and consuming REST APIs to connect frontend applications with backend services.",
  },
  {
    number: "05",
    title: "Tools & DevOps",
    description:
      "Using Git, GitHub, Docker, Linux, Postman, and Vercel to manage code, develop, test, deploy, and maintain applications.",
  },
];

// Projects data exact as specified
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "waqar-scent",
    number: "01",
    name: "Waqar Scent",
    category: "Client / Full-Stack E-commerce",
    description:
      "A modern e-commerce platform for a fragrance brand, built with React and Tailwind CSS. The project includes two backend implementations: Supabase for data management and a custom NestJS API using Prisma and PostgreSQL, with a strong focus on Arabic-first design, responsive layouts, and product presentation.",
    tags: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "E-commerce",
    ],
    hasLiveProject: true,
    liveUrl: "https://waqarscent.com",
    githubUrl: "https://github.com/mmilyass/waqarScent",
    images: {
      leftTop: "/assets/images/waqar-1.png",
      leftBottom: "/assets/images/logo_white.png",
      rightTall: "/assets/images/waqar-2.png",
    },
  },
  {
    id: "transcendence",
    number: "02",
    name: "Transcendence",
    category: "Team Project",
    description:
      "A web application where Ilyass worked on the frontend using Next.js and Tailwind CSS, contributing to the interface, visual design, and user experience.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "WebSocket", "UI/UX"],
    hasLiveProject: true,
    liveUrl: "https://github.com/mmilyass/ft_transcendence",
    githubUrl: "https://github.com/mmilyass/ft_transcendence",
    images: {
      leftTop: "/assets/images/maou3idy1.png", // Futuristic game neon wave
      leftBottom: "/assets/images/MAOU3IDY.png", // Retro-futuristic arcade / cyberpunk hardware
      rightTall: "/assets/images/maou3idy2.png", // Interactive gaming interface and digital displays
    },
  },
  {
    id: "webserv",
    number: "03",
    name: "Webserv",
    category: "C/C++ Project",
    description:
      "A custom HTTP web server built as part of the 1337/42 curriculum using C++ and C, demonstrating understanding of HTTP, sockets, non-blocking I/O, epoll, CGI, and server architecture.",
    tags: ["C++98", "HTTP 1.1", "Sockets", "Non-blocking I/O", "epoll", "CGI"],
    hasLiveProject: false, // Per prompt: disabled / non-link visual element rather than fake URL
    githubUrl: "https://github.com/mmilyass/web-server-",
    images: {
      leftTop: "/assets/images/server1.jpeg", // Server rack networking hardware
      leftBottom: "/assets/images/server2.jpeg", // Low-level systems code & terminal interface
      rightTall: "/assets/images/server3.jpeg", // High-throughput data streams & network sockets
    },
  },
];
