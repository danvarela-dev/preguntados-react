import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClassRespuestas from "./Respuestas";
import { getIndex, getRandomNumber } from "../tools/UtilitiesClass";


export default function ClassPreguntas(props: any) {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: "Quien es el Messi?",
      respuesta: 1,
    },
    {
      id: 2,
      pregunta: "Quien Pablo Neruda?",
      respuesta: 2,
    },
    {
      id: 3,
      pregunta: "De donde es Messi?",
      respuesta: 3,
    },
    {
      id: 4,
      pregunta: "Que son los conejos?",
      respuesta: 4,
    },
    {
      id: 5,
      pregunta: "Que son los perros?",
      respuesta: 5,
    },
    {
      id: 6,
      pregunta: "Donde esta Francia?",
      respuesta: 6,
    },
    {
      id: 7,
      pregunta: "Quien es goku?",
      respuesta: 7,
    },
    {
      id: 8,
      pregunta: "Quien es Lissa Simpson?",
      respuesta: 8,
    },
    {
      id: 9,
      pregunta: "Quien es Pedro Picapiedra?",
      respuesta: 9,
    },
    {
      id: 10,
      pregunta: "Donde se ubica Honduras?",
      respuesta: 10,
    },
  ]);

  const [ids,setIds] = useState([]); 
  let chosenId;

   const updateArrayValue = (value)=>{
      const arrayvalue = [0];
      shuffleArray(arrayvalue);
      arrayvalue.push(value);
      setIds(arrayvalue);
   }


  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };


  const formSubmit = () => {
    let idCur:number = getRandomNumber(9);
    updateArrayValue(idCur);
    console.log(idCur);

    //console.log(ids);
  };


  let curQuestion = preguntas[getIndex(ids,chosenId)];

//   chosenId = chosenId - 1;
//   console.log("index : " + chosenId);
//   console.log(curQuestion);
 console.log(ids);

  return (
    <>
      <div
        className="container bg-light"
        style={{ textAlign: "left", padding: "15px" }}
      >
        <h1 className="container"> {curQuestion?.pregunta}</h1>
      </div>
      <form className="container" onSubmit={formSubmit}>
        <ClassRespuestas chosenId={curQuestion?.respuesta}></ClassRespuestas>
      </form>
    </>
  );
}
