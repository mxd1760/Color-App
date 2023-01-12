import styled from "styled-components"
import {ItemTitle} from "../styles/shared"

const ColorBoxBackground = styled.div`
  position:relative;
  width:20%;
  height:25%;
  background-color:${props => props.color};
`
const ColorBoxBackgroundOverlay = styled.div`
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

export default function ColorBox({color,navigateToColor}){
  return(
    <ColorBoxBackground color={color.color} onClick={navigateToColor}>
      <ColorBoxBackgroundOverlay/>
      <ItemTitle>{color.name}</ItemTitle>
    </ColorBoxBackground>
  )
}