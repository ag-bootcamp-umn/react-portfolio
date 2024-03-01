import { Link } from "react-router-dom";

export default function Project(props) {
  const projects = props.projects;

  if (!projects) return <></>;
  return (
   <>
    {projects.map( project => (
      <div>
        <h2>{project.title}</h2>
        <p>{project.github}</p>
        <p>{project.deployed}</p>
        <p>{project.image}</p>
      </div>
    ))}
   </>
  )
}