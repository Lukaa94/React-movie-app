import React, { useState, useEffect } from 'react';
import baseApi from "../services/baseApi";
import urlList from "../services/urlList";
import "../components/Showcase.css";

const imgUrl = "https://image.tmdb.org/t/p/original";

function Showcase() {
    const[movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const Api = await baseApi.get(urlList.popular);
            setMovies(
                Api.data.results[
                Math.floor(Math.random() * Api.data.results.length -1)
            ]);
            return Api;
        }
        fetchData();
    }, []);
     /*imgUrl error*/
    return (
        <div className="Showcase">
       
          <img src={`${imgUrl}${movies.backdrop_path}`} alt="movies" className="showcase-img"/>  
        </div>
    )
}

export default Showcase
