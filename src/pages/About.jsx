import Hero from "../components/Hero";
import portrait from "../assets/images/portrait.png";
import React, { useState, useEffect } from "react";

export default function About() {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImgLoaded(true);
    };
    image.src = portrait;
  }, [portrait]);

  return (
    <>
      <Hero />
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <article className="col-md-8 grid grid--gap text-center">
              <h2 className="heading-2">About me</h2>
              {!imgLoaded ? (
                <div>Loading...</div>
              ) : (
                <img
                  src={portrait}
                  alt="Portrait of Alex Geer in the mountains"
                  className="card-img-top card-img-bottom"
                />
              )}

              <p>
                I knew I'd found a passion the moment I discovered coding. I
                love designing, building and styling apps. It appeals to my
                interests in art and languages: the constant learning of new
                skills; the exploration of diverse ways to apply my knowledge;
                the embracing of challenges; the telling of stories.
              </p>
              <p>
                After several years of online self-study and some freelance work
                as a Wordpress developer, I graduated from the University of
                Minnesota Full-Stack Coding Bootcamp in 2024, eager for the next
                challenge.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
