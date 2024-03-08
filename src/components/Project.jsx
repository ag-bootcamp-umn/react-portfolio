export default function Project({ project }) {
  return (
    <>
      <div>
        <h2>{project.title}</h2>
        <p>{project.github}</p>
        <p>{project.deployed}</p>
        <p>{project.image}</p>
      </div>
    </>
  );
}
