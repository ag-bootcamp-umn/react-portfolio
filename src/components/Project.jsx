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
      <div className="project radius">
        {!imgLoaded ? (
          <div>Loading...</div>
        ) : (
          <img src={imgUrl} alt={project.alt} />
        )}
        <div className="project__cover">
          {/* <Link
            className="project__link radius"
            to={project.deployed}
            target="_blank"
          > */}
          <h2>{project.title}</h2>
          {/* </Link> */}

          {/* <div className="project__description">
            <p>{project.description}</p>
          </div> */}
          {project.stack && (
            <ul className="project__stack">
              {project.stack.map((stackItem, idx) => (
                <li key={idx}>{stackItem}</li>
              ))}
            </ul>
          )}
          <div className="project__links-container">
            <Link
              className="project__link radius"
              to={project.deployed}
              target="_blank"
            >
              Visit Site
            </Link>
            <Link
              className="project__link radius"
              to={project.github}
              target="_blank"
            >
              Github
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
