import Image from "next/image";
import htmlImg from "../public/images/html.png";
import cssImg from "../public/images/css.png";
import jsImg from "../public/images/js.png";
import reactImg from "../public/images/react.png";
import nextImg from "../public/images/next3.png";
import nodeImg from "../public/images/node4.png";
import mongoImg from "../public/images/mongo5.png";
import gitImg from "../public/images/github.png";
import tailwindImg from "../public/images/tailwind.png";
import reduxImg from "../public/images/redux.png";
import framerImg from "../public/images/motion.png";
import ZustandImg from "../public/images/zustand.png";
import TSImg from "../public/images/ts.png";

const Skills = () => {
  const skill = [
    {
      img: htmlImg,
      name: "html",
    },
    {
      img: cssImg,
      name: "css",
    },
    {
      img: jsImg,
      name: "javascript",
    },
    {
      img: reactImg,
      name: "react",
    },
    {
      img: nextImg,
      name: "next",
    },
    {
      img: nodeImg,
      name: "nodejs",
    },
    {
      img: mongoImg,
      name: "mongo db",
    },
    {
      img: gitImg,
      name: "github",
    },
    {
      img: reactImg,
      name: "react native",
    },
    {
      img: tailwindImg,
      name: "tailwind",
    },
    {
      img: framerImg,
      name: "framer motion",
    },
    {
      img: reduxImg,
      name: "redux",
    },
    {
      img: ZustandImg,
      name: "Zustand",
    },
    {
      img: TSImg,
      name: "typescript",
    },
  ];
  return (
    <div id="skills" className="w-full lg:h-screen p-2 px-7">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] text-center sm:text-left">
          skills
        </p>
        <h2 className="py-4 capitalize text-center sm:text-left">
          what i can do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {skill.map((item) => (
            <div
              className="p-6 shadow-md shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-150"
              key={item.name}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center place-content-center">
                <div className="m-auto">
                  <Image src={item.img} alt="#" width={64} height={64} className="object-contain w-[64px] h-[64px]" />
                </div>

                <h3 className="uppercase text-center">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
