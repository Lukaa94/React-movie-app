import React from "react";

const ImgApi = "https://image.tmdb.org/t/p/w400";

function Movies({ title, poster_path }) {
  return (
    <div className="Movies">
      <section className="movies-title">
        <h1>{title}</h1>
      </section>
      <section className="movies-img">
        <img src={ImgApi + poster_path} alt={title} />
      </section>
    </div>
  );
}

export default Movies;