import { useState } from "react";
import { Project } from "../components";
import projectData from "../assets/projects.json";

import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function Portfolio() {

  const [projects, setProjects] = useState(projectData);

  return (
   <>
    <Project projects={projects}/>
   </>
  )
}