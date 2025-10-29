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
            Hi, I’m Sean Abubakar Musa, a passionate Full Stack Web Developer
            with over four years of hands-on experience building fast,
            responsive, and user-focused web applications. I specialize in
            creating seamless digital experiences that not only look great but
            perform flawlessly across all platforms. I’ve worked on a wide range
            of projects from e-commerce platforms and automation systems to
            custom web solutions each one sharpening my ability to turn
            complex ideas into clean, efficient, and scalable code. I’m highly
            skilled in modern web technologies such as React, Node.js, Express,
            MongoDB, and Next.js, and I constantly explore new tools and
            frameworks to stay ahead of industry trends. What drives me most is
            the thrill of solving real-world problems through technology. Every
            project I take on is an opportunity to innovate, collaborate, and
            learn something new. I pride myself on being detail-oriented,
            reliable, and fully committed to delivering work that exceeds
            expectations. Whether it’s developing a product from scratch or
            improving an existing system, I’m always open to exciting
            projects, collaborations, and opportunities that push boundaries and
            make an impact.
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
