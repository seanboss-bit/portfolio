import realEstate from "./public/images/Screenshot1.png";
import weatherImg from "./public/images/Screenshot3.png";
import photoImg from "./public/images/Screenshot5.png";
import paraImg from "./public/images/Screenshot7.png";
import instantImg from "./public/images/Screenshot131.png";
import dImg from "./public/images/Screenshot1311.png";

export const projectData = [
  {
    id: 1,
    name: "Paraplug",
    tech: "next js",
    img: paraImg,
    overviewTech: "next js",
    projectInfo:
      "this an e-commerce platform that allows users to shop for sneakers wordwide",
    technologies: [
      "next js",
      "paystack",
      "javascript",
      "css",
      "redux",
      "mongodb",
      "nodemailer",
    ],
    demo: "https://para-plug.vercel.app",
    code: "https://github.com/seanboss-bit/para-plug",
  },
  {
    id: 3,
    name: "real estate web",
    tech: "react js",
    img: realEstate,
    overviewTech: "react js / nodejs / stripe",
    projectInfo:
      "this app was built using react and redux on the front-end and node js and mongo db as the backend. with this app users are able to go online and purchase houses with the stripe api and keep track of the houses they have bought and the houses on rent and with a timer where once ur rent expires it will be removed from your dashboard. user authentication is also enabled you sigin in with your mail and a verification mail will be sent unless email is verified user cannot login.",
    technologies: [
      "react js",
      "mongo db",
      "node js",
      "bootstrap",
      "css",
      "javascript",
      "redux",
      "stripe API",
      "nodemailer",
    ],
    demo: "https://ab-homes.vercel.app/",
    code: "https://github.com/seanboss-bit/ab-homes",
  },
  {
    id: 5,
    name: "weather app",
    tech: "react js",
    img: weatherImg,
    overviewTech: "react js",
    projectInfo:
      "this app allows users to type in their location and get the weather upadate using the open weather API. this app is also pwa so users can download the website on their phones. this was my first attempt using pwa",
    technologies: ["react js", "css", "javascript", "open weather API"],
    demo: "https://weather-app-lyart-iota-17.vercel.app/",
    code: "https://github.com/seanboss-bit/weather-app",
  },
  {
    id: 6,
    name: "photography",
    tech: "next js",
    img: photoImg,
    overviewTech: "next js / tailwind ",
    projectInfo:
      "this is a photography ui in which you can contact the photographer and send messages to him. also look at some of his works and his history as a photographer.",
    technologies: ["next js", "tailwind"],
    demo: "https://nextjs-portfolio-nine-hazel-80.vercel.app/",
    code: "https://github.com/seanboss-bit/nextjs-portfolio",
  },
  {
    id: 7,
    name: "Instant T Laundry",
    tech: "React JS ",
    img: instantImg,
    overviewTech: "React JS / vite / tailwind ",
    projectInfo:
      "A Laundry Service Website is an online designed to simplify laundry and dry-cleaning services for customers. The website allows users to schedule pickups, track orders, and make payments seamlessly. Goal: To offer a user-friendly, efficient, and reliable platform that simplifies laundry management and enhances customer satisfaction. 🚀",
    technologies: ["react js", "tailwind", "node js", "email js", "mongodb"],
    demo: "https://instant-t-laundry.vercel.app/",
    code: "https://github.com/seanboss-bit/instant-t-laundry",
  },
  {
    id: 8,
    name: "3d Portfolio",
    tech: "React JS",
    img: dImg,
    overviewTech: "React JS / Three Js",
    projectInfo:
      "A 3D Portfolio Website which is interactive and visually immersive platform designed to showcase an individual’s or agency’s work using 3D elements and animations. It provides an engaging experience that captivates visitors while highlighting projects, skills, and achievements.Goal:To create a visually striking and engaging digital space that leaves a lasting impression while effectively showcasing skills and projects. 🚀",
    technologies: [
      "react js",
      "tailwind",
      "email js",
      "Three Js",
      "React three fibre",
    ],
    demo: "https://my-portfolio-xi-indol-16.vercel.app/",
    code: "https://github.com/seanboss-bit/my_portfolio",
  },
];
