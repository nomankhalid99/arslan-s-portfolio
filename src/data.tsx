import { CallMade, SouthEast } from "@mui/icons-material";
import { ReactElement } from "react";

interface DataItem {
    id: number;
    img: string;
    // url: string;
  }

  export const data: DataItem[] = [
    {
      id: 1,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/94b16b8c-0ed1-41bd-8e4c-07a5e44c4a84?w=1370&cf_fit=scale-down&q=85&format=auto&s=d3d37cef129e206ea9a107c0c32d46c72e62dbecb0ff33e317b8c08beeff8b1c",
      // url: "https://task-hub-eight.vercel.app/",
    },
    {
      id: 2,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/e3625d86-4c4b-44a3-9739-f0c2adcca799?w=1370&cf_fit=scale-down&q=85&format=auto&s=361f72fd36228d16c3b2b68d515852e0b0b6931897c3b76b9147ccfa7d1e979a",
      // url: "https://car-showcase-iota-lilac.vercel.app/",
    },
 
    {
      id: 3,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/9adda530-67c7-471c-98fb-9eeec219c127?w=1370&cf_fit=scale-down&q=85&format=auto&s=80bead9960ce3b97d076a23bda8622cc9433f6cba4e7e80902649ba1aabdb91c",
      // url: "https://gym-ts-phi.vercel.app/",
    },
    {
      id: 4,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/c1f68875-e309-465d-88ae-39eb5fa7463d?w=1370&cf_fit=scale-down&q=85&format=auto&s=eee43d66db403341f36e04ebf091cfa786b8b9825a1d1d994dfd917f13f28862",
      // url: "https://dashboard-cui.vercel.app/",
    },
    {
      id: 5,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/feb8e2cb-40b3-49d5-a941-a1efdd39e040?w=1370&cf_fit=scale-down&q=85&format=auto&s=edf2e2a4ef19eaf1a2ac8abf8fba7d8ef9cfb07074f8f46978ea02b5d8f4afd9",
      // url: "https://dashboard-mui-two.vercel.app/",
    },
    {
      id: 6,
      img: "https://elements-resized.envatousercontent.com/elements-preview-images/b24cbb2e-8a89-41cf-b570-8e59e7b1a2ac?w=1370&cf_fit=scale-down&q=85&format=auto&s=604d8821d706ebd4f4e19e7e87e47fa4ee5651c7c47a72d9bdee238478417926",
      // url: "https://roofing-agency.vercel.app/",
    },
    // {
    //   id: 7,
    //   img: "../src/assets/portfolioImgs/5.PNG",
    //   url: "https://emart-mu.vercel.app/",
    // },
    // {
    //   id: 8,
    //   img: "../src/assets/portfolioImgs/1.PNG",
    //   url: "https://e-commerce-website-one-rosy.vercel.app/",
    // },
    // {
    //   id: 9,
    //   img: "../src/assets/portfolioImgs/2.PNG",
    //   url: "https://e-commerce-project-1-nu.vercel.app/",
    // },
  ];


interface SkillsData {
    id: number;
    img: string;
    percent: string;
    name: string;
  }

 export const skillsData: SkillsData[] = [
    {
      id: 1,
      img: "../src/assets/skills/HTML.svg",
      percent: "85%",
      name: "HTML",
    },
    {
      id: 2,
      img: "../src/assets/skills/CSS.svg",
      percent: "90%",
      name: "CSS",
    },
    {
      id: 3,
      img: "../src/assets/skills/laravel.svg",
      percent: "75%",
      name: "Laravel",
      
    },
    {
      id: 4,
      img: "../src/assets/skills/react.svg",
      percent: "70%",
      name: "React",
    },
    {
      id: 5,
      img: "../src/assets/skills/Mongo.svg",
      percent: "75%",
      name: "MongoDB",
    },
    {
      id: 6,
      img: "../src/assets/skills/Node.svg",
      percent: "80%",
      name: "NodeJs",
    },
    {
      id: 7,
      img: "../src/assets/skills/TS.svg",
      percent: "55%",
      name: "Typescript",
    },
    {
      id: 8,
      img: "../src/assets/skills/JS.svg",
      percent: "60%",
      name: "Javascript",
    },
  ];


  interface TestimonialsProps {
    id: number;
    img: string;
    top?: number | null;
    left?: number | null;
    bottom?: number | null;
    right?: number | null;
  }

  export const testimonialsData: TestimonialsProps[] = [
    {
      id: 1,
      img: "../src/assets/testimonials/T1.svg",
      top: 0,
      left: 30,
      bottom: null,
      right: null,
    },
    {
      id: 2,
      img: "../src/assets/testimonials/T2.svg",
      top: 13,
      left: 11,
      bottom: null,
      right: null,
    },
    {
      id: 3,
      img: "../src/assets/testimonials/T3.svg",
      top: 43,
      left: 8,
      bottom: null,
      right: null,
    },
    {
      id: 4,
      img: "../src/assets/testimonials/T4.svg",
      bottom: 8,
      left: 24,
      top: null,
      right: null,
    },
    {
      id: 5,
      img: "../src/assets/testimonials/T5.svg",
      top: 10,
      right: 13,
      bottom: null,
      left: null,
    },
    {
      id: 6,
      img: "../src/assets/testimonials/T6.svg",
      top: 35,
      right: 10,
      bottom: null,
      left: null,
    },
    {
      id: 7,
      img: "../src/assets/testimonials/T7.svg",
      right: 6,
      bottom: 6,
      top: null,
      left: null,
    },
    {
        id: 8,
        img: "../src/assets/testimonials/T1.svg",
        top: null,
        left: null,
        bottom: 5,
        right: 20,
      },
    {
        id: 9,
        img: "../src/assets/testimonials/T8.svg",
        top: 26,
        left: null,
        bottom: null,
        right: 24,
      },
    {
        id: 10,
        img: "../src/assets/testimonials/T9.svg",
        top: null,
        left: 9,
        bottom: 8,
        right: null,
      },
  ];

  interface ReviewProps {
    id: number;
    review: string;
    name: string;
  }

  export const reviews: ReviewProps[] = [
    {
      id: 1,
      review:
        "The development services provided were a game-changer for our project. The expertise in MERN stack development helped deliver a robust and scalable web application ahead of schedule. The attention to detail and commitment to quality were truly impressive. Highly recommended.",
      name: "Tom Holwater",
    },
    {
      id: 2,
      review:
        "Expectations were exceeded in every way. The vision was brought to life with a sleek, user-friendly interface and seamless functionality. The ability to solve complex problems quickly and efficiently was invaluable. A truly professional service!",
      name: "Jennifer Highpez",
    },
    {
      id: 3,
      review:
        "The results delivered have been outstanding. The deep knowledge of the MERN stack and innovative approach resulted in a dynamic and engaging web app that has significantly boosted user engagement. Exceptional work!",
      name: "Britney Swords",
    },
  ];
  

  interface ServicesProps {
    id:number,
    service:string,
    description:string,
    icon:ReactElement
  }

  export const services: ServicesProps[] = [
    {
      id: 1,
      service: "Web Application Development",
      description:
        "Transform ideas into powerful, interactive web applications with comprehensive development services. Utilizing the MERN stack, robust, scalable, and user-friendly applications are created to meet business needs and enhance user engagement.",
      icon: <CallMade className="text-white" />,
    },
    // {
    //   id: 2,
    //   service: "API Development & Integration",
    //   description:
    //     "Seamlessly connect applications with custom APIs designed to improve functionality and data exchange. Expertise in Node.js and Express.js ensures efficient, secure, and scalable API solutions tailored to specific requirements.",
    //   icon: <SouthEast className="hidden text-white md:block" />,
    // },
    // {
    //   id: 3,
    //   service: "Frontend Design & Development",
    //   description:
    //     "Create visually appealing and highly responsive interfaces with frontend design and development services. Leveraging the power of React, intuitive user experiences are delivered that engage and retain audiences while reflecting brand identity.",
    //   icon: <SouthEast className="hidden text-white md:block" />,
    // },
    {
      id: 4,
      service: "Machine Learning Model Development",
      description:
        "Design and implement machine learning models to extract insights, predict trends, and optimize decision-making. Advanced algorithms and frameworks are utilized to build solutions tailored to diverse business challenges.",
        icon: <SouthEast className="hidden text-white md:block" />,
    },
    {
      id: 5,
      service: "Chatbot Development",
      description:
        "Develop intelligent chatbots that automate tasks, enhance customer engagement, and provide 24/7 support. Using natural language processing and AI, efficient and user-friendly conversational solutions are created for various industries.",
      icon: <SouthEast className="hidden text-white md:block" />,
    },
    {
      id: 6,
      service: "Telegram Game Chatbot Development",
      description:
        "Create interactive and engaging game-based chatbots for Telegram. With custom game logic and seamless integration, chatbots offer users an entertaining experience while driving engagement and user retention.",
        icon: <SouthEast className="hidden text-white md:block" />,
    },
  ];
  
