import React, { useState, useEffect } from "react";
import baseApi from "../services/baseApi";
import "../components/Movie.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Movies({ title, url }) {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const Api = await baseApi.get(url);
      setMovies(Api.data.results);
      return Api;
    }
    fetchData();
  }, [url]);

  return (
    <div className="Movie">
      <h1 className="movie-title">{title}</h1>
      <div className="movie-images">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${imgUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
