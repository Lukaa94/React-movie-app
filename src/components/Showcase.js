import React, { useState, useEffect } from "react";
import baseApi from "../services/baseApi";
import urlList from "../services/urlList";
import "../components/Showcase.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Showcase() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Api = await baseApi.get(urlList.popular);
      setMovies(
        Api.data.results[
          Math.floor(Math.random() * Api.data.results.length - 1)
        ]
      );
      return Api;
    }
    fetchData();
  }, []);
  console.log(movies);
  /*img error*/
  return (
    <div className="Showcase">
        <div className="showcase-text">
            <h1>{movies.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis a debitis nam repudiandae odio suscipit velit ipsa. Exercitationem id, commodi tenetur quasi ut velit veniam ratione modi vero dolores nulla?</p>
            <div className="showcase-btns">
              <button className="btn-play">Play</button>
              <button className="btn-info">More Info</button>
            </div>
        </div>
      <img
        src={`${imgUrl}${movies.backdrop_path}`}
        alt="movies"
        className="showcase-img"
      />
    </div>
  );
}

export default Showcase;
