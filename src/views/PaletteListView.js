import React from "react";
import styled from "styled-components"
import PaletteListItem from "../components/PaletteListItem";
import {PageView,Title} from "../styles/shared"

const PaletteList = styled.main`
  display:flexbox;
  flex-wrap:wrap;
  justify-content:center;
`


export default function PaletteListView({colors}){

  let palettes = []
  for(let palette of colors){
    palettes.push(<PaletteListItem key={palette.paletteName} palette={palette}/>)
  }

  return(
    <PageView>
      <Title>PaletteListView</Title>
      <PaletteList>
        {palettes}
      </PaletteList>
    </PageView>
  )
}