import realEstate from "./public/images/Screenshot1.png";
import huluImg from "./public/images/Screenshot2.png";
import weatherImg from "./public/images/Screenshot3.png";
import netflixImg from "./public/images/Screenshot4.png";
import photoImg from "./public/images/Screenshot5.png";
import manageImg from "./public/images/Screenshot6.png";
import paraImg from "./public/images/Screenshot7.png";

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
    demo: "https://paraplug.netlify.app/",
    code: "https://github.com/seanboss-bit/para-plug",
  },
  {
    id: 2,
    name: "manage ui",
    tech: "html",
    img: manageImg,
    overviewTech: "tailwind cli",
    projectInfo:
      "this is a ui built with html , css and tailwind with vanilla javascript",
    technologies: ["html", "css", "javascript", "tailwind"],
    demo: "https://melodic-sawine-da82ca.netlify.app",
    code: "https://github.com/seanboss-bit/manage-design",
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
    demo: "https://abhomes.netlify.app",
    code: "https://github.com/seanboss-bit/ab-homes",
  },
  {
    id: 4,
    name: "hulu UI",
    tech: "next js",
    img: huluImg,
    overviewTech: "next js / TMDB / tailwind",
    projectInfo:
      "this is a hulu ui designed with next js and using the TMDB api users are able to get movies based on genre and when they click on the immage there it routes them to the page to get more info on that particular movie. using next pwa users are able to download the website data on their device",
    technologies: ["next js", "TNDB", "tailwind", "next-pwa", "javascript"],
    demo: "https://huluclonelatest.netlify.app",
    code: "https://github.com/seanboss-bit/hulu-next-clone",
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
    demo: "https://weather-boss.netlify.app",
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
    demo: "https://seannextfirst.netlify.app",
    code: "https://github.com/seanboss-bit/nextjs-portfolio",
  },
  {
    id: 7,
    name: "netflix ui",
    tech: "react js",
    img: netflixImg,
    overviewTech: "react js / react youtube API",
    projectInfo:
      "this app was built using react and allows users to watch trailers of the movie selected and the showcase changes background image title and overview when ever the user refreshes the page",
    technologies: ["react js", "react-youtube", "javascript"],
    demo: "https://netflix-you.netlify.app",
    code: "https://github.com/seanboss-bit/netflix",
  },
];
