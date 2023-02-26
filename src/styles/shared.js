import styled from "styled-components"
import { Button } from "@mui/material"

export const PageView=styled.main`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
`
export const PageView2=styled.main`
  display:flex;
  height:100vh;
  width:100vw;
  flex-direction:row;
  justify-content:stretch;
  align-items:stretch;
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

export const SideBar = styled.div`
  border-left:3px solid blue;
  background-color:#99bbff;
  width:20%;
  display:flex;
  flex-direction:column;
  align-items:center;
`
export const Content = styled.div`
  flex:1;
`

export const ColorBoxBackground = styled.div`
  position:relative;
  width:20%;
  height:${props=>props.tall?"50%":"25%"};
  background-color:${props => props.color};
`
export const ColorBoxBackgroundOverlay = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  background-color: rgba(0,0,0,0.2);
  transition: 0.4s ease-in-out;
  opacity:0;
  &:hover{
    opacity:1;
  }
`

export const CopyButton = styled.div`
  position: absolute;
  right:0;
  bottom:0;
  height:10$;
  background-color: rgba(255,255,255,${props=>props.hide?0.2:0.8});
  padding:2%;
  transition: 0.1s ease-in-out
`

export const XButton =styled.div`
  position: absolute;
  right:0;
  top:0;
  height:10%;
  width:10%;
  background-color:rgba(255,255,255,0.8);
  text-align:center;
`