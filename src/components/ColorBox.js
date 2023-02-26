import { useState } from "react"
import {ItemTitle,ColorBoxBackground,ColorBoxBackgroundOverlay,CopyButton} from "../styles/shared"



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