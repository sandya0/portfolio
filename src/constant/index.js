// index.js
// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I create responsive, engaging, and modern web interfaces with smooth animations and optimized performance using popular frameworks and libraries.",
    items: [
      {
        title: "React Development",
        description: "(React, Vite, Next.js, Component-Based Architecture)",
      },
      {
        title: "Animations & Interactivity",
        description: "(GSAP, Framer Motion, ScrollTrigger)",
      },
      {
        title: "Styling & UI Frameworks",
        description: "(Tailwind CSS, Material UI, SCSS)",
      },
    ],
  },
  {
    title: "Full-Stack & Web Platforms",
    description:
      "From static websites to interactive platforms, I build projects that combine dynamic content, API integration, and scalability.",
    items: [
      {
        title: "Interactive Websites",
        description: "(Quizzes, Maps, Storytelling Platforms)",
      },
      {
        title: "E-commerce & Marketplaces",
        description: "(Product Listings, Payment Integration, User Flows)",
      },
      {
        title: "Data-Driven Platforms",
        description: "(Firebase, REST APIs, GraphQL, SQL/NoSQL Databases)",
      },
    ],
  },
  {
    title: "UI/UX & Prototyping",
    description:
      "I focus on creating visually appealing and user-friendly interfaces that balance design and functionality for a smooth experience.",
    items: [
      {
        title: "UI Design",
        description: "(Figma, Modern Design Systems, Material Design)",
      },
      {
        title: "User Experience",
        description: "(Accessibility, Responsive Layouts, Minimalist Approach)",
      },
      {
        title: "Prototyping",
        description: "(Interactive Wireframes, Rapid Iteration, User Testing)",
      },
    ],
  },
  {
    title: "Creative & Presentation Projects",
    description:
      "Beyond code, I bring creativity into my projects, making websites that not only work but also tell a story and represent identity.",
    items: [
      {
        title: "Cultural Platforms",
        description: "(Showcasing heritage through interactive storytelling)",
      },
      {
        title: "Organization Websites",
        description: "(Event Highlights, Divisions, Community Building)",
      },
      {
        title: "Brand & Business Sites",
        description: "(Cocktail Bars, Marketplaces, Digital Stores)",
      },
    ],
  },
];


export const projects = [
  {
    id: 1,
    name: "Bansara – Exploring the Colors of Batik",
    description:
      "A digital platform that showcases the beauty, history, and traditions of Indonesian batik through definitions, stories, interactive maps, and quizzes.",
    link: "https://bansara.netlify.app/",
    image: "/assets/projects/Bansara.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      
    ],
  },
  {
    id: 2,
    name: "UMN English Student Council Website",
    description:
      "A student organization website that showcases UESC’s divisions, activities, and events while promoting English skill development and community building at UMN.",
    link: "https://uesc-alpha.vercel.app/",
    image: "/assets/projects/UESC.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Velvet Pour Website",
    description:
      "A stylish cocktail bar website featuring signature drinks, mocktails, recipes, and bar details to showcase Velvet Pour’s craft and atmosphere.",
    link: "https://project-cocktails.vercel.app/",
    image: "/assets/projects/Cocktails.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Vite" },
      { id: 3, name: "GSAP" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  // {
  //   id: 4,
  //   name: "Electronics & Gadgets Store",
  //   description:
  //     "A multi-category online shop featuring electronics, home appliances, and gaming gear with special offers.",
  //   href: "",
  //   image: "/assets/projects/electronics-store.jpg",
  //   bgImage: "/assets/backgrounds/poster.jpg",
  //   frameworks: [
  //     { id: 1, name: "Vue.js" },
  //     { id: 2, name: "Laravel" },
  //     { id: 3, name: "MySQL" },
  //     { id: 4, name: "SCSS" },
  //   ],
  // },
  // {
  //   id: 5,
  //   name: "Home Decor Marketplace",
  //   description:
  //     "A curated collection of designer home decor items, including furniture and artisan vases.",
  //   href: "",
  //   image: "/assets/projects/home-decor-store.jpg",
  //   bgImage: "/assets/backgrounds/table.jpg",
  //   frameworks: [
  //     { id: 1, name: "Angular" },
  //     { id: 2, name: "Firebase" },
  //     { id: 3, name: "GraphQL" },
  //     { id: 4, name: "Material UI" },
  //   ],
  // },
  // {
  //   id: 6,
  //   name: "Digital Game Store",
  //   description:
  //     "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
  //   href: "",
  //   image: "/assets/projects/game-store.jpg",
  //   bgImage: "/assets/backgrounds/curtains.jpg",
  //   frameworks: [
  //     { id: 1, name: "Svelte" },
  //     { id: 2, name: "Node.js" },
  //     { id: 3, name: "MongoDB" },
  //     { id: 4, name: "Chakra UI" },
  //   ],
  // },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/sandya_pradayan/" },
  // {
  //   name: "Youtube",
  //   href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  // },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sandya-pradayan-baa04b213/" },
  { name: "GitHub", href: "https://github.com/sandya0" },
];