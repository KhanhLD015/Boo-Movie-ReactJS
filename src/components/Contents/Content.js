import React from "react";
import MoviesRow from "./MoviesRow";

const movies = [
  "https://i.pinimg.com/564x/e7/25/a5/e725a5f134277a2e26480db498ebdf48.jpg",
  "https://i.pinimg.com/564x/a5/66/2d/a5662d6a1e6f5f196c34e2a9f3fabb1c.jpg",
  "https://i.pinimg.com/564x/31/21/53/3121534a54680876fbc01b9c16240fd1.jpg",
  "https://i.pinimg.com/564x/ce/e1/55/cee155bbc38c0b2dc1eae838ed510cc5.jpg",
  "https://i.pinimg.com/564x/c9/c1/cc/c9c1cc9ea31132b52327e8fc51eea6f1.jpg",
  "https://i.pinimg.com/736x/8b/98/e0/8b98e02ffd887e694ab1c53f733bea97.jpg",
  "https://i.pinimg.com/564x/ff/51/94/ff51944843c14ad15ea1fc1056ee3bce.jpg",
  "https://i.pinimg.com/564x/e0/cc/67/e0cc670c8b292b6eb77d406388d50835.jpg",
];

function Content(props) {
  return (
    <div>
      <MoviesRow movies={movies} title="Boo Moview Originals" />
      <MoviesRow movies={movies} title="Trending Movies" />
      <MoviesRow movies={movies} title="Top rated Movies" />
      <MoviesRow movies={movies} title="Actions Movies" />
      <MoviesRow movies={movies} title="Horror Movies" />
      <MoviesRow movies={movies} title="Roman Movies" />
      <MoviesRow movies={movies} title="Documentaries Movies" />
    </div>
  );
}

export default Content;
