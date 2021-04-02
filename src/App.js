import React, { useEffect, useState } from "react";
import Movies from "./components/Movies";
import "./App.css";

const baseApi = "https://api.themoviedb.org/3";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(baseApi + "/movie/popular?api_key=10bb1e7ae1e1803b4248edae4cc9a06c")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="Movie-container">
      {movies.map((item) => (
        <Movies key={item.id} {...item} />
      ))}
    </div>
  );
}

export default App;
