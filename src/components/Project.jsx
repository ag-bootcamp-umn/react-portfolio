import { Link } from "react-router-dom";

export default function Project({ project }) {
  return (
    <>
      <div className="col-md-6 col-lg-4 project">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.alt} />
        <Link to={{ pathname: project.github }} target="_blank">
          Github
        </Link>
        <Link to={{ pathname: project.deployed }} target="_blank">
          Deployed App
        </Link>
      </div>
    </>
  );
}
