import React from "react";
import urlList from "./services/urlList";
import Nav from "./components/Header";
import Showcase from "./components/Showcase";
import Movies from "./components/Movies";
import "./App.css";

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
