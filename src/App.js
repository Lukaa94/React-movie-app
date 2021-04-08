import React from "react";
import Nav from "./components/Header";
import Movies from "./components/Movies";
import "./App.css";
import urlList from "./services/urlList";
import Showcase from "./components/Showcase";

function App() {
  return (
    <div>
      <Nav />
      <Showcase />
      <Movies title="popular" url={urlList.popular} />
      <Movies title="top rated" url={urlList.topRated} />
      <Movies title="2020" url={urlList.year2020}/>
    </div>
  );
}

export default App;
