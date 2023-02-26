import React from 'react'
import {ItemTitle, ColorBoxBackground,ColorBoxBackgroundOverlay} from "../styles/shared"



export default function DraggableColorBox({color={color:"#000",name:"Black"}}) {
  // const callRemove = (e)=>{
  //   console.log("Hello!");
  //   remover()
  // }
  return (
  <ColorBoxBackground color={color.color}>
      <ColorBoxBackgroundOverlay/>
      <ItemTitle>{color.name}</ItemTitle>
      {/* {tall&&!hide?null:<CopyButton onClick={copy} hide={hide}>{tall?"Copied":"Copy"}</CopyButton>} */}
      {/* <XButton onClick={callRemove}>X</XButton> */}
  </ColorBoxBackground>
  )
}