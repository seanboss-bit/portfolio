import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Abubakar</span>
          </h1>
          <h1 className="py-2 text-gray-700 capitalize">
            a fullstack web developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[70% m-auto]">
            i am a full stack web developer but i specialize mainly in buliding
            (and ocassionally designing) exceptional digital experiences.
            currently i am focused on improving myself while learning more
            tecnologies for self-improvement.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href={"https://www.linkedin.com/in/abubakar-musa-571867211/"}
              target="_blank"
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"https://github.com/seanboss-bit"}
              target="_blank"
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
            >
              <FaGithub />
            </Link>
            <Link
              href={"mailto:shaunaibek@gmail.com"}
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
            >
              <AiOutlineMail />
            </Link>
            <Link
              href={"/RESUME 2.0.docx"}
              download={true}
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
            >
              <BsFillPersonLinesFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
