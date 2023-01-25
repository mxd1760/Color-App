import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ColorBox from "../components/ColorBox";
import { PaletteViewHeader,BackButton,Title,ColorBoxContainer, PageView } from "../styles/shared";
import { generateColorRange } from "../util/colorCalc";


export default function ColorView({colors}){
  const navigate = useNavigate();
  let params = useParams();
  // console.log(`id: ${params.id}`)
  // console.log(`color: ${params.color}`)
  const [palette] = colors.filter((palette)=>palette.paletteName===params.id)
  const [color_intermediate] = palette.colors.filter((color)=>color.name.toLowerCase().replace(/ /g,"-")===params.color)
  const display_colors = generateColorRange(color_intermediate)
  // console.log(display_colors)
  let colorBoxes = [];
  for (let i=1;i<10;i++){
    colorBoxes.push(<ColorBox key={i} color={display_colors[i]} tall/>)
  }
  return(
    <PageView>
      <PaletteViewHeader>
        <BackButton onClick={()=>navigate(`/palettes/${params.id}`)}>{"<- Back"}</BackButton>
        <Title>ColorView</Title>
      </PaletteViewHeader>
      <ColorBoxContainer>
        {colorBoxes}
      </ColorBoxContainer>
    </PageView>
  )
}