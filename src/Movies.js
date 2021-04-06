import React, { useState, useEffect } from "react";
import baseApi from './services/baseApi';


function Movies({title, url}) {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const Api = await baseApi.get(url);
      /*console.log(Api);*/
      setMovies(Api.data.results);
      return Api;
    }
    fetchData();
  }, [url]);

  console.log(movies);

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default Movies;