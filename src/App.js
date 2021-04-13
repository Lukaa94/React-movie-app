import React from "react";
import urlList from "./services/urlList";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Movies title="Popular" url={urlList.popular} />
      <Movies title="Top rated" url={urlList.topRated} />
      <Movies title="2020" url={urlList.year2020}/>
    </div>
  );
}

export default App;
