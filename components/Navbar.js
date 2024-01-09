import Image from "next/image";
import Link from "next/link";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import logoImg from "../public/images/A.png";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [nav, setNav] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/projects/[id]") {
      setNav("transparent");
      setLinkColor("#f8f8f8");
    } else {
      setNav("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);
  const links = [
    { id: 1, text: "home", location: "/" },
    { id: 2, text: "about", location: "/#about" },
    { id: 3, text: "skills", location: "/#skills" },
    { id: 4, text: "project", location: "/#projects" },
    { id: 5, text: "contact", location: "/#contact" },
  ];
  return (
    <div style={{background: `${nav}`}} className="fixed w-full top-0 h-20 shadow-lg z-[100] px-6">
      <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image alt="#" src={logoImg} width={100} height="50" />

        <div>
          <ul style={{color: `${linkColor}`}} className="hidden sm:flex">
            {links.map((item) => (
              <Link href={item.location} key={item.id}>
                <li className="capitalize ml-10 text-sm hover:border-b">
                  {item.text}
                </li>
              </Link>
            ))}
          </ul>
          <div onClick={() => setNavOpen(true)}>
            <Bars3BottomLeftIcon className="h-8 m4-[20px] sm:hidden" style={{color: `${linkColor}`}} />
          </div>
        </div>
      </div>

      {/* SIDE MENU */}
      <div
        className={
          navOpen
            ? "md:hidden fixed right-[0%] top-0 w-full h-screen bg-black/70 transition ease-in-out duration-100"
            : " md:hidden fixed right-[-100%] top-0 w-full h-screen bg-black/70 transition ease-in-out duration-100"
        }
      >
        <div
          className={
            navOpen
              ? "md:hidden fixed right-[0%] top-0 h-screen bg-[#ecf0f3] w-[75%] sm:w-[60%] md:w-[45%] p-10 ease-in duration-500"
              : "md:hidden fixed right-[-100%] top-0 h-screen bg-[#ecf0f3] w-[75%] sm:w-[60%] md:w-[45%] p-10 ease-in duration-500"
          }
        >
          <div className="flex items-center justify-between w-full mb-3">
            <Image src={logoImg} alt="#" width={87} height={35} />
            <div
              className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              onClick={() => setNavOpen(false)}
            >
              <XMarkIcon className="h-7 sm:hidden" />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="capitalize py-4 text-sm">
              let's build something legendary together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="py-4 ">
              {links.map((item) => (
                <Link
                  href={item.location}
                  key={item.id}
                  onClick={() => setNavOpen(false)}
                >
                  <li className="py-4 text-sm capitalize">{item.text}</li>
                </Link>
              ))}
            </ul>
            <div className="pt-20">
              <p className="capitalize">let's connect</p>
              <div className="flex items-center justify-between  mt-3">
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
      </div>
    </div>
  );
};

export default Navbar;
