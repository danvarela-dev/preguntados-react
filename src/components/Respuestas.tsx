import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { getIndex,getRandomNumber } from "../tools/UtilitiesClass";

export default function ClassRespuestas(props: any) {
  const respuestas = [
    { id: 1, respuesta: "Jugador del Paris" },
    { id: 2, respuesta: "Escritor" },
    { id: 3, respuesta: "Argentina" },
    { id: 4, respuesta: "Herbivoros" },
    { id: 5, respuesta: "Mamiferos" },
    { id: 6, respuesta: "Europa"},
    { id: 7, respuesta: "Es un sajayin" },
    { id: 8, respuesta: "Es hija de Homero Simpson"},
    { id: 9, respuesta: "Es un Picapiedra"},
    { id: 10, respuesta: "Centro America" },
  ];

  

  let chosenId;

  
 

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  

  let answerQuestion: object = respuestas[getIndex(respuestas,props.chosenId)];

  let arrayAnswers = new Array(0);
  arrayAnswers.push(answerQuestion);

  for (let i = 0; i < 4 - 1; i++) {
    answerQuestion = respuestas[getRandomNumber(respuestas.length - 1)];
    if (!arrayAnswers.includes(answerQuestion, 0)) {
      arrayAnswers.push(answerQuestion);
    } else {
      answerQuestion = respuestas[getRandomNumber(respuestas.length - 1)];
      if (!arrayAnswers.includes(answerQuestion, 0)) {
        arrayAnswers.push(answerQuestion);
      } else {
        answerQuestion = respuestas[getRandomNumber(respuestas.length - 1)];
        if (!arrayAnswers.includes(answerQuestion, 0)) {
          arrayAnswers.push(answerQuestion);
        } else {
          if (!arrayAnswers.includes(answerQuestion, 0)) {
            arrayAnswers.push(answerQuestion);
          }
        }
      }
    }
  }

  shuffleArray(arrayAnswers);

  return (
    <>
      <div className="container mx-auto answers row">
       
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">
              A. {arrayAnswers[0]?.respuesta}
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">
              B. {arrayAnswers[1]?.respuesta}
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">
              C. {arrayAnswers[2]?.respuesta}
            </label>
          </div>
          <div className="form-check col">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">
              D. {arrayAnswers[3]?.respuesta}
            </label>
          </div>

          <div className="mx-auto" style={{marginTop:"20px"}}> 
            <button className="btn btn-primary" type="submit">Next</button>
          </div>
        
      </div>
    </>
  );
}
