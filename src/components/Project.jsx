import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Project({ project }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  const imgUrl = project.image;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImgLoaded(true);
    };
    image.src = imgUrl;
  }, [imgUrl]);

  return (
    <>
      <div className="col-md-6 col-lg-4 project">
        {!imgLoaded ? (
          <div>Loading...</div>
        ) : (
          <img src={imgUrl} alt={project.alt} />
        )}
        <div className="project__cover">
          <Link className="project__link" to={project.deployed} target="_blank">
            <h2>{project.title}</h2>
          </Link>

          <div className="project__description">
            <p>{project.description}</p>
          </div>
          {project.stack && (
            <div className="project__stack">
              <h4>Stack:</h4>
              <ul>
                {project.stack.map((stackItem) => (
                  <li>{stackItem}</li>
                ))}
              </ul>
            </div>
          )}
          <Link className="project__link" to={project.github} target="_blank">
            Github
          </Link>
        </div>
      </div>
    </>
  );
}
