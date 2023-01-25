import styled from "styled-components"
import { Button } from "@mui/material"

export const PageView=styled.main`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
`
export const PageView2=styled.main`
  height:100vh;
  width:100vw;
`

export const Title = styled.h1`
  margin-left:2vw;
`

export const ItemTitle = styled.h3`
  margin:0;
`

export const PaletteViewHeader = styled.div`
 display:flexbox;
 flex-direction:row;
 align-items:center;
`

export const BackButton = styled(Button)({
  width:"7vw",
  height:"10vh",
})

export const SpaceFiller = styled.div`
  flex-grow:1;
`

export const ColorBoxContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  flex:1;
`