import { Project } from "../components";
import projectData from "../assets/projects.json";

export default function Portfolio() {
  if (!projectData.length) return <></>;
  return (
    <>
      <section className="page-section page-section--padding-top">
        <div className="container">
          <h1 className="heading-1">Portfolio</h1>
          <h3 className="heading-3">A collection of my work</h3>
          <p>
            My own work, including deployed websites built for clients and
            practice work from my online courses and the full-stack coding
            bootcamp at the University of Minnesota and EdX.
          </p>
        </div>
      </section>
      <section className="page-section">
        <div className="container">
          <div className="row grid grid--gap grid--123">
            {projectData.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
