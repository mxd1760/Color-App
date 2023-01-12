import React from "react";
import { useParams } from "react-router-dom";


export default function ColorView(){
  let params = useParams();
  console.log(`id: ${params.id}`)
  console.log(`color: ${params.color}`)
  return(
    <>
      <h1>ColorView</h1>
    </>
  )
}