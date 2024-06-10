import Project from "./Project";
import projectData from "../assets/projects.json";

export default function Portfolio() {
  if (!projectData.length) return <></>;
  return (
    <section className="page-section" id="portfolio">
      <div className="container container--800 padding-bottom">
        <h2 className="heading-2 text-center">Portfolio</h2>
        <h3 className="heading-3 text-center">A collection of my work</h3>
        <p>
          My own work, including deployed websites built for clients and
          practice work from my online courses and the full-stack coding
          bootcamp at the University of Minnesota and EdX.
        </p>
      </div>
      {/* </section>
      <section className="page-section"> */}
      <div className="container">
        <div className="row grid grid--gap grid--md-2 grid--center">
          {projectData.map((project, i) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
