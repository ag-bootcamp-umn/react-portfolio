import { useState } from "react";
import { Project } from "../components";
import projectData from "../assets/projects.json";



export default function Portfolio() {

  const [projects, setProjects] = useState(projectData);

  return (
   <>
    <Project projects={projects}/>
   </>
  )
}