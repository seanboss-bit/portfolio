import Link from "next/link";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="px-6 lg:h-screen">
      <div className="max-w-[1240px] m-auto w-full py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] text-center sm:text-left">
          contact
        </p>
        <h2 className="py-4 capitalize text-center sm:text-left">
          get in touch
        </h2>
        <div className="grid lg:grid-cols-1 gap-8">
          {/* left */}
          <div className="w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHlwaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                  alt="#"
                  className="rounded-xl hover:scale-105 ease-in duration-150 "
                />
              </div>
              <div>
                <h2 className="py-2 capitalize text-center">sean</h2>
                <p className="capitalize text-center">full stack developer</p>
                <p className="capitalize py-4 text-center">
                  i am available for both freelance , partime and full time job
                  opportunities
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-center">connect with me</p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Link
                    href={"https://www.instagram.com/muso_abk/"}
                    className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
                    target="_blank"
                  >
                    <AiOutlineInstagram />
                  </Link>
                  <Link
                    target="_blank"
                    href={"https://wa.me/23409056760660"}
                    download={true}
                    className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150"
                  >
                    <AiOutlineWhatsApp />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/abubakar-musa-571867211/"
                    }
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
                </div>
              </div>
            </div>
          </div>
          {/* right */}
        </div>
        <div className="flex justify-center py-12">
          <Link href={"/"}>
            <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-150">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
