import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import baseApi from "../services/baseApi";
import "../components/Movies.css";

//fix swiper on resize

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
        slidesPerView={2}
        slidesPerGroup={2}
        navigation
        pagination
        spaceBetween={20}
        observer={true}
        observeParents={true}
        breakpoints={{
          1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          900: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide className="swiper-slide">
            <img
              key={movie.id}
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
