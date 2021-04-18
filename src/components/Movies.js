import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import baseApi from "../services/baseApi";
import "../components/Movies.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

SwiperCore.use([Navigation, Pagination ]);

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

      <Swiper
        className="swiper-container"
        speed={700}
        slidesPerView={"auto"}
        slidesPerGroup={2}
        navigation
        pagination
        observer={true}
        observeParents={true}
        
      >
        {movies.map((movie) => (
          <SwiperSlide className="swiper-slide" key={movie.id}>
            <img
              src={`${imgUrl}${movie.poster_path}`}
              alt="img"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Movies;
