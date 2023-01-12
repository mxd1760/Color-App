import React from "react";
import { useParams } from "react-router-dom";


export default function PaletteView(){
  const params = useParams()
  console.log(`id: ${params.id}`)
  return(
    <>
      <h1>PaletteView</h1>
    </>
  )
}