import { projectData } from "../projectsData";
import ProjectItem from "./ProjectItem";

const Project = () => {
  return (
    <div id="projects" className="w-full px-8">
      <div className="max-w-[1240px] mx-auto py-16">
        <p className="uppercase text-xl tracking-widest text-[#5651e5] text-center sm:text-left">
          projects
        </p>
        <h2 className="py-4 capitalize text-center sm:text-left">
          what i have built
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              img={project.img}
              title={project.name}
              tech={project.tech}
              url={`/projects/ ${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
