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
        <h2>{project.title}</h2>
        {/* <img src={project.image} alt={project.alt} /> */}

        <Link
          className="project__img-link"
          to={{ pathname: project.deployed }}
          target="_blank"
        >
          {!imgLoaded ? (
            <div>Loading...</div>
          ) : (
            <img src={imgUrl} alt={project.alt} />
          )}
        </Link>
        <Link to={{ pathname: project.github }} target="_blank">
          Github
        </Link>
      </div>
    </>
  );
}
