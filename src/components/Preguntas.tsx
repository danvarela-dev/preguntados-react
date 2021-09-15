import React, { useEffect, useState,useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { preguntaModel } from "../models/pregunta";


export default function Preguntas({preguntas}) {

  const [question,setQuestion] = useState<preguntaModel>({
    pregunta: "",
    respuesta: "",
    opciones: []
  });

  let ordenPreg = new Set<number>();

  let iteradorPreg=useRef<any>();

  let terminado=false;

  useEffect(() =>{
    random();
    iteradorPreg.current=ordenPreg.values();
    setQuestion(preguntas[iteradorPreg.current.next().value]);
  },[])

  const random=()=>{
    while(ordenPreg.size!=10){
      ordenPreg.add(Math.floor(Math.random()*10));
    }
  }

  const nextQuestion=()=>{
    const valor=iteradorPreg.current.next();
    console.log(valor);
    if(!valor.done){
      setQuestion(preguntas[valor.value]);
    }else{
      terminado=true;
    } 
  }

  return (
    <div>
      <h1>{question.pregunta}</h1>
      {question.opciones.map((opcion)=>{
        return(
          <>
          <input type="radio" id={opcion} name="pregunta" value={opcion}/>
          <label>{opcion}</label>
          </>
        )
      })}
      <button onClick={nextQuestion}>click</button>
      {terminado && <h4>Terminado</h4>}
    </div>
  )
}
