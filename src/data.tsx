import { CallMade, SouthEast } from "@mui/icons-material";
import { ReactElement } from "react";
import Img1 from './assets/img1.avif'
import Img2 from './assets/img2.avif'
import Img3 from './assets/img3.avif'
import Img4 from './assets/img4.avif'
import Img5 from './assets/img5.avif'
import Img6 from './assets/img6.avif'
import HTML from './assets/HTML.svg'
import CSS from './assets/CSS.svg'
import JS from './assets/JS.svg'
import TS from './assets/TS.svg'
import Laravel from './assets/laravel.svg'
import Mongo from './assets/Mongo.svg'
import Node from './assets/Node.svg'
import React from './assets/react.svg'
import T1 from './assets/T1.svg'
import T2 from './assets/T2.svg'
import T3 from './assets/T3.svg'
import T4 from './assets/T5.svg'
import T5 from './assets/T5.svg'
import T6 from './assets/T6.svg'
import T7 from './assets/T7.svg'
import T8 from './assets/T8.svg'
import T9 from './assets/T9.svg'

interface DataItem {
    id: number;
    img: string;
    // url: string;
  }

  export const data: DataItem[] = [
    {
      id: 1,
      img: Img1,
      // url: "https://task-hub-eight.vercel.app/",
    },
    {
      id: 2,
      img: Img2
      // url: "https://car-showcase-iota-lilac.vercel.app/",
    },
 
    {
      id: 3,
      img: Img3,
      // url: "https://gym-ts-phi.vercel.app/",
    },
    {
      id: 4,
      img: Img4,
      // url: "https://dashboard-cui.vercel.app/",
    },
    {
      id: 5,
      img: Img5,
      // url: "https://dashboard-mui-two.vercel.app/",
    },
    {
      id: 6,
      img: Img6,
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
      img: HTML,
      percent: "85%",
      name: "HTML",
    },
    {
      id: 2,
      img: CSS,
      percent: "90%",
      name: "CSS",
    },
    {
      id: 3,
      img: Laravel,
      percent: "75%",
      name: "Laravel",
      
    },
    {
      id: 4,
      img: React,
      percent: "70%",
      name: "React",
    },
    {
      id: 5,
      img: Mongo,
      percent: "75%",
      name: "MongoDB",
    },
    {
      id: 6,
      img: Node,
      percent: "80%",
      name: "NodeJs",
    },
    {
      id: 7,
      img: TS,
      percent: "55%",
      name: "Typescript",
    },
    {
      id: 8,
      img: JS,
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
      img: T1,
      top: 0,
      left: 30,
      bottom: null,
      right: null,
    },
    {
      id: 2,
      img: T2,
      top: 13,
      left: 11,
      bottom: null,
      right: null,
    },
    {
      id: 3,
      img: T3,
      top: 43,
      left: 8,
      bottom: null,
      right: null,
    },
    {
      id: 4,
      img: T4,
      bottom: 8,
      left: 24,
      top: null,
      right: null,
    },
    {
      id: 5,
      img: T5,
      top: 10,
      right: 13,
      bottom: null,
      left: null,
    },
    {
      id: 6,
      img: T6,
      top: 35,
      right: 10,
      bottom: null,
      left: null,
    },
    {
      id: 7,
      img: T7,
      right: 6,
      bottom: 6,
      top: null,
      left: null,
    },
    {
        id: 8,
        img: T1,
        top: null,
        left: null,
        bottom: 5,
        right: 20,
      },
    {
        id: 9,
        img: T8,
        top: 26,
        left: null,
        bottom: null,
        right: 24,
      },
    {
        id: 10,
        img: T9,
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
  
