import { Button } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {styled as muiStyled} from "@mui/material/styles"
import ColorBox from "../components/ColorBox";
import {PageView, Title} from "../styles/shared"

const PaletteViewHeader = styled.div`
 display:flexbox;
 flex-direction:row;
 align-items:center;
`
const BackButton = muiStyled(Button)({
  width:"7vw",
  height:"10vh",
})

const ColorBoxContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  flex:1;
`

export default function PaletteView({colors}){
  const navigate = useNavigate();
  const params = useParams()
  const colorBoxes = []
  const [palette] = colors.filter((palette)=>palette.paletteName===params.id)
  for(let color of palette.colors){
    colorBoxes.push(<ColorBox key={color.name} color={color} navigateToColor={()=>navigate(`/palettes/${palette.paletteName}/${color.name}`)}/>)
  }
  return(
    <PageView>
      <PaletteViewHeader>
        <BackButton onClick={()=>navigate("/palettes")}>{"<- Back"}</BackButton>
        <Title>{params.id}</Title>
      </PaletteViewHeader>
      <ColorBoxContainer>
        {colorBoxes}
      </ColorBoxContainer>
    </PageView>
  )
}