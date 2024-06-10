import skillsData from "../assets/skills.json";

function Resume() {
  const skills = skillsData[0].skills;
  return (
    <section className="page-section page-section--blue" id="skills">
      <div className="resume container container--800">
        <h2 className="heading-2 text-center">Skills</h2>
        <div className="row grid grid--gap grid--gap--row-sm grid--md-2 grid--center">
          {skills.map((skill, i) => (
            <h4 key={i} className="resume__skill">
              {skill}
            </h4>
          ))}
        </div>
        <a
          className="resume__link"
          target="_blank"
          href="/GEER_ALEXANDER_RESUME.pdf"
        >
          <button className="button button--stretch">Download my resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
