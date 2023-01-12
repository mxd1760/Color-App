import React from "react";
import styled from "styled-components"
import PaletteListItem from "../components/PaletteListItem";

const PaletteList = styled.main`
  display:flexbox;
  flex-wrap:wrap;
  justify-content:center;
`
const Title = styled.h1`
  margin-left:2vw;
`

export default function PaletteListView({colors}){

  let palettes = []
  for(let palette of colors){
    palettes.push(<PaletteListItem key={palette.paletteName} palette={palette}/>)
  }

  return(
    <>
      <Title>PaletteListView</Title>
      <PaletteList>
        {palettes}
      </PaletteList>
    </>
  )
}