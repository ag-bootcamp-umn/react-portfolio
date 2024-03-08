import { Project } from "../components";
import projectData from "../assets/projects.json";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Portfolio() {
  if (!projectData.length) return <></>;
  return (
    <>
      {projectData.map((project) => (
        <Project key={project.title} project={project} />
      ))}
    </>
  );
}
