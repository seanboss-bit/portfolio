import Image from "next/image";

const Skills = () => {
  const skill = [
    {
      img: "/../public/images/html.png",
      name: "html",
    },
    {
      img: "/../public/images/css.png",
      name: "css",
    },
    {
      img: "/../public/images/js.png",
      name: "javascript",
    },
    {
      img: "/../public/images/react.png",
      name: "react",
    },
    {
      img: "/../public/images/next3.png",
      name: "next",
    },
    {
      img: "/../public/images/node4.png",
      name: "nodejs",
    },
    {
      img: "/../public/images/mongo5.png",
      name: "mongo db",
    },
    {
      img: "/../public/images/github.png",
      name: "github",
    },
    {
      img: "/../public/images/bootstrap.png",
      name: "bootstrap",
    },
    {
      img: "/../public/images/sass.png",
      name: "sass",
    },
    {
      img: "/../public/images/tailwind.png",
      name: "tailwind",
    },
    {
      img: "/../public/images/mui.png",
      name: "material ui",
    },
    {
      img: "/../public/images/redux.png",
      name: "redux",
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
            <div className="p-6 shadow-md shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-150" key={item.name}>
              <div className="grid grid-cols-2 gap-4 justify-center items-center place-content-center">
                <div className="m-auto">
                  <Image src={item.img} alt="#" width={64} height={64} />
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
