import Image from "next/image";
import React from "react";
import meImg from "../public/images/me.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen flex items-center p-2 py-16 px-7"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] text-center sm:text-left">
            about
          </p>
          <h2 className="py-4 capitalize text-center sm:text-left">who i am</h2>
          <p className="py-2 text-gray-600 capitalize">
            my full name is sean abubakar musa. i am a student studying computer
            science at police academy, kano, Nigeria. i learnt full stack
            web development at an instiution called projaro and i have been coding
            for more than 4 years now. and i don't plan on stopping anytime soon. i am
            always very enthusiastic for any project i am given because it gives
            me the opportunity to learn more.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-lg shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-150 mt-[20px] md:mt-0">
          <Image
            src={meImg}
            alt="#"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
