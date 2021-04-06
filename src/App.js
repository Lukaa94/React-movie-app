import React, { useEffect, useState } from "react";
import Movies from './Movies';
import "./App.css";
import urlList from "./services/Url";




function App() {
  return (
    <div>
     <Movies title="title" url={urlList.popular}/>
    </div>
  );
}

export default App;
