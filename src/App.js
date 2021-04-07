import React from "react";
import Movies from "./Movies";
import "./App.css";
import urlList from "./services/urlList";

function App() {
  return (
    <div>
      <Movies title="popular" url={urlList.popular} />
      <Movies title="top rated" url={urlList.topRated} />
      <Movies title="2020" url={urlList.year2020}/>
    </div>
  );
}

export default App;
