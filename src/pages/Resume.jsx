import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import skillsData from "../assets/skills.json";

export default function Resume() {
  const skills = skillsData[0].skills;
  return (
    <>
      <section className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="resume col-md-6">
              <h2 className="resume__title">Skills:</h2>
              {skills.map((skill, i) => (
                <h4 key={i} className="resume__skill">
                  {skill}
                </h4>
              ))}
              <Button
                className="resume__item button button--lg"
                variant="light"
              >
                <a
                  className="button__link"
                  target="_blank"
                  href="/GEER_ALEXANDER_RESUME.pdf"
                >
                  Download my resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
