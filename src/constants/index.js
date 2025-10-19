import { element } from "prop-types";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  vue,
  react,
  elementplus,
  sass,
  nuxt,
  tailwindcss,
  typescript,
  game,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: vue,
    name: "Vue.js",
    type: "Frontend",
  },
  {
    imageUrl: nuxt,
    name: "Nuxt.js",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: game,
    name: "Game Development",
    type: "Other",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: elementplus,
    name: "Element Plus",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Nova Digital",
    icon: "📦", // replace with your icon import
    iconBg: "#00fa00",
    date: "2024 - 2025",
    points: [
      "Led full frontend development as the sole engineer, delivering a telehealth platform 15% ahead of schedule.",
      "Optimized data-fetching by implementing a caching strategy that reduced redundant API calls by 40% and page weight by 300KB.",
      "Improved accessibility with full keyboard navigation support for target users.",
      "Provided post-release support, performance improvements, and feature updates.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Hevelian",
    icon: "💊", // replace with your icon import
    iconBg: "#06006a",
    date: "2023 - 2025",
    points: [
      "Engineered a barcode scanning feature that reduced login time by over 90% and eliminated manual entry errors.",
      "Optimized rendering pipelines, lowering CPU load by 40% on low-end devices.",
      "Prototyped innovative UI for self-service kiosks, validating business cases for full-scale rollout.",
      "Led development of two projects simultaneously, streamlining internal business processes.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Alfa Bank Ukraine",
    icon: "🏧", // replace with your icon import
    iconBg: "#accbe1",
    date: "2022 - 2023",
    points: [
      "Developed and maintained landing pages, admin panels, and client-side banking applications.",
      "Collaborated with backend teams to ensure smooth front–back integration for financial workflows.",
      "Contributed to selecting optimal technology stacks and front-end architectures.",
      "Enhanced platform usability through responsive layouts and modular components.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Dinarys",
    icon: "🌐", // replace with your icon import
    iconBg: "#ff581c",
    date: "2019 - 2021",
    points: [
      "Developed user account dashboards and educational content modules with reading, listening, and writing support.",
      "Implemented appointment scheduling, chat, and emergency call tracking for telemedicine services.",
      "Integrated chatbots and payment features to improve platform engagement and efficiency.",
      "Built and maintained booking management and payment profile features with Vue and Node.js.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/kliuha",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kliuha/",
  },
  {
    name: "Telegram",
    iconUrl: "#",
    link: "https://t.me/kii_ua",
  },
];
export const projects = [
  {
    iconUrl: "#", // replace with your project icon
    theme: "btn-back-blue",
    name: "Telehealth Platform",
    description:
      "Developed an end-to-end telemedicine platform enabling patients to schedule appointments, chat with doctors, and track health metrics — delivered ahead of schedule with optimized API performance.",
    link: "#",
  },
  {
    iconUrl: "#",
    theme: "btn-back-green",
    name: "Self-Service Kiosk UI",
    description:
      "Prototyped and implemented an innovative kiosk interface for automated customer check-in and payment, validated through company-wide pilot deployment.",
    link: "#",
  },
  {
    iconUrl: "#",
    theme: "btn-back-black",
    name: "Banking Frontend Suite",
    description:
      "Developed responsive banking interfaces including admin dashboards, client portals, and document archiving tools, ensuring smooth integration with backend systems.",
    link: "#",
  },
  {
    iconUrl: "#",
    theme: "btn-back-pink",
    name: "Healthcare Chatbot Integration",
    description:
      "Integrated intelligent chatbots and appointment scheduling systems within a telehealth platform, enhancing user engagement and reducing manual workload.",
    link: "#",
  },
  {
    iconUrl: "#",
    theme: "btn-back-yellow",
    name: "Business Automation Systems",
    description:
      "Built internal tools and dashboards to automate core business workflows, improving efficiency and data synchronization across teams.",
    link: "#",
  },
];
