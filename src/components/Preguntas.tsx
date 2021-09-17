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
  },[]);

  const random=()=>{
    while(ordenPreg.size!=10){
      ordenPreg.add(Math.floor(Math.random()*10));
    }
  }

  const nextQuestion=()=>{
    const valor=iteradorPreg.current.next();
    if(!valor.done){
      setQuestion(preguntas[valor.value]);
    }else{
      terminado=true;
    } 
  }

  const respuestaCorrecta=()=>{
    let puntaje=0;
    if(question.pregunta===question.respuesta){
      puntaje=puntaje+1;
    }
    return (
      <div>
        <h1>Tu puntaje es: {puntaje}</h1>
      </div>
    )
  }

 const [diff, setDiff]=useState(null)
 const [initial,setInitial]=useState(null)

 const tick=()=>{
   setDiff(new Date(+new Date() -initial))
 };
 const start=()=>{setInitial(+new Date())}

 useEffect(()=>{
   if(initial){
     requestAnimationFrame(tick);
   }
 },[initial]);

 useEffect(()=>{
   if(diff){
     requestAnimationFrame(tick);
   }
 },[diff]);

  

  return (
    <div>
      <h6 className="timer" >{timeFormat(diff)}</h6>
      <h1>{question.pregunta}</h1>
      {question.opciones.map((opcion)=>{
        return(
          <div text-align="right">
          <input type="radio" id={opcion} name="pregunta" value={opcion}/>
          <label >{opcion}</label>
          </div>
        )
      })}
      <div onClick={start}>
      <button onClick={nextQuestion}>click</button>
      <div>{terminado && <h4>Terminado: {respuestaCorrecta}</h4>}</div>
      </div>
    </div>
  )
}

const timeFormat=(date)=>{
  if(!date) return "00";
  let mm=date.getUTCMinutes();
  let ss=date.getSeconds();
  //let cm=Math.round(date.getMilliseconds()/10);
  
  //mm=mm<10?"0"+mm:mm;
  ss=ss<10?"0"+ss: ss;
  //cm=cm<10?"0"+cm: cm;
  if(ss===10)return (<><h1>Time out!</h1></>)
  return `${ss}`;
};
