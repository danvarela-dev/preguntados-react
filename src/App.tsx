import React from "react";
import data from "./data/preguntas.json"
import "./App.css";
import Preguntas from "./components/Preguntas";


function App() {

  return (
    <>
      <Preguntas preguntas={data}></Preguntas>
    </>
  );
}

export default App;
