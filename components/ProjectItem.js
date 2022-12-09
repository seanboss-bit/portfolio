import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ img, title, tech, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white transition ease-in duration-150">
      <Image
        className="rounded-xl group-hover:opacity-10 transition ease-in duration-150"
        src={img}
        alt="#"
      />
      <div className="hidden group-hover:block transition ease-in duration-150 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-xl tracking-wider capitalize text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-center uppercase">{tech}</p>
        <Link href={url}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 capitalize font-medium text-lg cursor-pointer">
            read more
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
