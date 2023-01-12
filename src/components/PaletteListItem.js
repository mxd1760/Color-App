import React from "react";
import styled from "styled-components"
import {Card, CardContent} from "@mui/material"
import { useNavigate } from "react-router-dom";
import { ItemTitle } from "../styles/shared"; 

const PaletteCard = styled(Card)`
  width:20%;
  margin:10px;
`

const PaletteIcon = styled.span`
`
const PaletteCardTitle = styled.div`
  display:flexbox;
  justify-content:space-between;
`
const ColorIconContainer = styled.div`
  width:100%;
  height:15vh;
  display:flexbox;
  flex-wrap:wrap;
`
const ColorIcon = styled.div`
  width:20%;
  height:25%;
  background-color:${props=>props.color}
`


export default function PaletteListItem({palette}){
  const navigate = useNavigate();
  const paletteColors=[]
  for(let color of palette.colors){
    paletteColors.push(<ColorIcon key={color.name} color={color.color}/>)
  }

  return(
    <PaletteCard onClick={()=>navigate(`/palettes/${palette.paletteName}`)}>
      <CardContent>
        <ColorIconContainer>
          {paletteColors}
        </ColorIconContainer>
        <PaletteCardTitle>
          <ItemTitle>{palette.paletteName}</ItemTitle>
          <PaletteIcon>{palette.emoji}</PaletteIcon>
        </PaletteCardTitle>
      </CardContent>
    </PaletteCard>
  )
}