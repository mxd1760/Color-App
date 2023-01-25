import { Slider } from "@mui/material";
import React,{useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import ColorBox from "../components/ColorBox";
import {PageView, Title,BackButton,PaletteViewHeader,SpaceFiller,ColorBoxContainer} from "../styles/shared"
import { generatePalette } from "../util/colorCalc";




export default function PaletteView({colors}){
  const navigate = useNavigate();
  const params = useParams()
  const colorBoxes = []
  const [lightness,setLightness] = useState(500);
  const [palette_intermediate] = colors.filter((palette)=>palette.paletteName===params.id)
  let palette = generatePalette(palette_intermediate)
  const handleSliderChange = (e,newValue)=>{
    setLightness(newValue)
  }
  for(let color of palette.colors[lightness]){
    colorBoxes.push(<ColorBox key={color.name} color={color} navigateToColor={()=>navigate(`/palettes/${palette.paletteName}/${color.id}`)}/>)
  }
  return(
    <PageView>
      <PaletteViewHeader>
        <BackButton onClick={()=>navigate("/palettes")}>{"<- Back"}</BackButton>
        <Title>{params.id}</Title>
        <Slider defaultValue={500} min={100} max={900} step={100} size="small"
          value={lightness} onChange={handleSliderChange}
          sx={{width:"30%",marginLeft:"20px"}}/>
        <SpaceFiller/>
        <BackButton onClick={()=>navigate(`/palettes/edit/${params.id}`)}>Edit Palette</BackButton>
      </PaletteViewHeader>
      <ColorBoxContainer>
        {colorBoxes}
      </ColorBoxContainer>
    </PageView>
  )
}