import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { ColorContext } from "../App";
import PaletteListItem from "../components/PaletteListItem";
import {PageView,Title} from "../styles/shared"

const PaletteList = styled.main`
  display:flexbox;
  flex-wrap:wrap;
  justify-content:center;
`
const Header = styled.header`
  display:flexbox;
  justify-content:space-between;
  flex-direction:row;
  align-items:center;
`
const NewPaletteButton = styled(Button)`
`

export default function PaletteListView(){
  const colors = useContext(ColorContext).rawColors;
  let navigate = useNavigate();

  let palettes = []
  for(let palette of colors){
    palettes.push(<PaletteListItem key={palette.paletteName} palette={palette}/>)
  }

  return(
    <PageView>
      <Header>
        <Title>PaletteListView</Title>
        <NewPaletteButton onClick={()=>navigate("/palettes/new")}>Add A New Palette</NewPaletteButton>
      </Header>
      <PaletteList>
        {palettes}
      </PaletteList>
    </PageView>
  )
}