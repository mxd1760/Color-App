import { useState } from "react"
import styled from "styled-components"
import {ItemTitle} from "../styles/shared"

const ColorBoxBackground = styled.div`
  position:relative;
  width:20%;
  height:${props=>props.tall?"50%":"25%"};
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

const CopyButton = styled.div`
  position: absolute;
  right:0;
  bottom:0;
  height:10$;
  background-color: rgba(255,255,255,${props=>props.hide?0.2:0.8});
  padding:2%;
  transition: 0.1s ease-in-out
`

export default function ColorBox({color,navigateToColor,shade,tall}){
  const [hide,setHide] = useState(false)
  const copy = (e)=>{
    e.stopPropagation()
    navigator.clipboard.writeText(color.color)
    setHide(true)
    setTimeout(()=>setHide(false),1000)
  }

  return(
    <ColorBoxBackground color={color.rgb} onClick={tall?copy:navigateToColor} tall={tall}>
      <ColorBoxBackgroundOverlay/>
      <ItemTitle>{color.name}</ItemTitle>
      {tall&&!hide?null:<CopyButton onClick={copy} hide={hide}>{tall?"Copied":"Copy"}</CopyButton>}
    </ColorBoxBackground>
  )
}