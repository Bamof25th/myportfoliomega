import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  bitdurg,
  sail,
  cn,
  filmpire,
  weatherapp,
  chat,
  threejs,
  blog,
  refokus,
  easily,
} from "../assets/";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "https://drive.google.com/file/d/1zSeYoeQDKXKqcErGwJ1WgKpDvpSQN-kL/view?usp=sharing",
    title: "Resume",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Student",
    company_name: "BIT-DURG",
    icon: bitdurg,
    iconBg: "#ffff",
    date: "2019 - 2023",
    points: ["Eectrical Engineering ", "JAVA Programming", "DSA"],
  },
  {
    title: "SAIL-BSP",
    company_name: "Bhilai Steel Plant",
    icon: sail,
    iconBg: "#ffff",
    date: "Jan 2021 - March 2021",
    points: ["Voctional Trainee", "System Inspections"],
  },
  {
    title: "Web Developer Teaching Assistant",
    company_name: "Coding Ninjas",
    icon: cn,
    iconBg: "#ffff",
    date: "Oct 2023 Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Taught HTML, CSS, Node.js, JavaScript, Express.js, and MongoDB to students.",
      "Created engaging and interactive lessons to enhance student learning experience.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "FilmPire",
    description:
      "FilmPire is a movie discovery app that allows users to browse and search for movies from the TMDB API. It uses React and Material-UI for the user interface, and react-query for data fetching.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "TMDB",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "text-slate-300",
      },
    ],
    image: filmpire,
    source_code_link: "https://github.com/Bamof25th/FilmPire",
  },
  {
    name: "WeatherGO",
    description:
      "Web application that allowes you to get the weather forcast fo the region you search for using weather API.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-Css",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/Bamof25th/WeatherReportApp",
  },
  {
    name: "Vibely",
    description:
      "A real time chat application made using mern stack and  socket.io for realtime communication.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Socket-Io",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Zustand",
        color: "yellow-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/Bamof25th/mern-chat-app",
  },
  {
    name: "Bam-Blog",
    description:
      "The application allows users to register, create, edit, and delete blog posts, as well as comment on posts. The goal of this project is to provide a seamless and intuitive platform for both bloggers and readers to engage with content.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "text-indigo-500",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/Bamof25th/BlogApp",
  },
  {
    name: "Refokus-Clone",
    description:
      " The project aims to replicate design, and functionalities of the original Refokus website while incorporating additional features and enhancements for an improved user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
      {
        name: "Locomotive",
        color: "text-indigo-500",
      },
    ],
    image: refokus,
    source_code_link: "https://github.com/Bamof25th/refokus-clone",
  },
  {
    name: "Easily",
    description:
      " The project aims to replicate design, and functionalities of the original Refokus website while incorporating additional features and enhancements for an improved user experience.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: easily,
    source_code_link: "https://github.com/Bamof25th/easily",
  },
];

export { services, technologies, experiences, testimonials, projects };
