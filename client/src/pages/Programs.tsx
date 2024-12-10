import { useLoaderData } from "react-router-dom";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
};

function Programs() {
  const programs = useLoaderData() as Program[];

  return (
    <>
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img src={program.poster} alt={program.title} />
          <p>{program.synopsis}</p>
          <p>{program.country}</p>
          <p>{program.year}</p>
        </div>
      ))}
    </>
  );
}

export default Programs;
