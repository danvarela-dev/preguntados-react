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
      <h1 className="timer">{timeFormat(diff)}</h1>
      <h1>{question.pregunta}</h1>
      {question.opciones.map((opcion)=>{
        return(
          <div text-align="left">
          <input type="radio" id={opcion} name="pregunta" value={opcion}/>
          <label >{opcion}</label>
          </div>
        )
      })}
      <div onClick={start}>
      <button onClick={nextQuestion}>click</button>
      {terminado && <h4>Terminado</h4>}
      </div>
    </div>
  )
}

const timeFormat=(date)=>{
  if(!date) return "00:00:00";
  let mm=date.getUTCMinutes();
  let ss=date.getSeconds();
  //let cm=Math.round(date.getMilliseconds()/10);

  mm=mm<10?"0"+mm:mm;
  ss=ss<10?"0"+ss: ss;
  //cm=cm<10?"0"+cm: cm;

  return `${mm}:${ss}`;
};
