// import { Drawer, IconButton } from "@mui/material";
import React,{useContext, useState} from "react";
import { redirect, useNavigate } from "react-router-dom";
import { PaletteViewHeader,BackButton,Title, PageView2, SpaceFiller,SideBar,Content } from "../styles/shared";
import styled from "styled-components";
// import CheveronLeftIcon from "@mui/icons-material/ChevronLeft"
// import { ChevronRight } from "@mui/icons-material";
// import { SketchPicker as ColorPicker } from "react-color";
import { HexColorPicker as ColorPicker } from "react-colorful";
import {SortableContainer, SortableElement} from "react-sortable-hoc"
import DraggableColorBox from "../components/DraggableColorBox";
import { TextField,Button } from "@mui/material";
import { ColorContext } from "../App";

// const NotDrawer = styled.div`
//   flex:1;
//   positiion:fixed;
// `
// const DrawerHeader = styled.div`
//   display:flex;
//   flex-direction:row;
//   align-items:center;
//   padding:10px;
//   height:10vh;
//   background-color:blue;
// `
// const DrawerContent = styled.div`
//   flex:1;
//   width:20vw;
// `

const SortableListContainer = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-content:flex-start;
  height:90%;
`

const NameInput = styled(TextField).attrs(props=>({
  id:"name-input",
  variant:"outlined",
  sx:{margin:"20px",marginBottom:"5px"}
}))``

const TitleInput = styled(TextField).attrs({
  variant:"standard",
  sx:{marginTop:"25px",width:"40vw"},
  InputProps:{style:{fontSize:30}},
})`
`


const placeholderItems = [
  {color:"#f00",name:"Red"},
  {color:"#0f0",name:"Green"},
  {color:"#00f",name:"Blue"},
  {color:"#fff",name:"White"},
  {color:"#f00",name:"Red-2"},
  {color:"#0f0",name:"Green-2"},
  {color:"#00f",name:"Blue-2"},
  {color:"#f00",name:"Red-3"},
  {color:"#0f0",name:"Green-3"},
  {color:"#00f",name:"Blue-3"},
  {color:"#f00",name:"Red-4"},
  {color:"#0f0",name:"Green-4"},
  {color:"#00f",name:"Blue-4"},
]

const SortableItem = SortableElement(({value})=><DraggableColorBox color={value}/>)

const SortableList = SortableContainer(({items})=>{
  const out = [];
  for(let i=0;i<items.length;i++){
    out.push(<SortableItem key={`item-${items[i].name}`} index={i} sortIndex={i} value={items[i]}/>)
  }
  //console.log(out);
  return (
  <SortableListContainer>
    {out}
  </SortableListContainer>)
})



export default function NewPaletteView({edit}){
  const addPalette = useContext(ColorContext).add;
  const navigate = useNavigate();
  const [items,setItems] = useState([]);
  const [formColor,setFormColor] = useState("#345");
  const [formColorValid,setFormColorValid] = useState(true);
  const [formName,setFormName] = useState("");
  const [formNameValid,setFormNameValid] = useState(true);
  const [autoFormName,setAutoFormName] = useState(false);
  const [paletteTitle,setPaletteTitle] = useState("");
  const [validPaletteTitle,setValidPaletteTitle] = useState(true);

  const sortEnd = ({oldIndex,newIndex}) =>{
    let temp = [...items]
    const item = items[oldIndex]
    temp.splice(oldIndex,1);
    temp.splice(newIndex,0,item);
    setItems(temp);
    //console.log("Sorted "+oldIndex+" to "+newIndex)
  }
  const remove = (index)=>{
    let temp = [...items];
    temp.splice(index,1)
    setItems(temp);
  }
  const handleRandomColor = (e)=>{
    const colorConsts = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let randomColor = "#";
    for(let i=0;i<6;i++){
      randomColor += colorConsts[Math.floor(Math.random()*colorConsts.length)]
    }
    changeColor(randomColor);
  }
  const changeColor = (color)=>{
    setFormColor(color);
    if(formName===""||autoFormName){
      setFormName("Color "+color.replace("#","0x_"));
      setAutoFormName(true);
    }
  }
  const handleRemoveLast = (e)=>{
    remove(items.length-1);
  }
  const addColor = (item)=>{
    setItems([...items,item]);
  }
  const testNameValid = ()=>{
    let ans = formName!=="";
    // for all colors in palette check that name is unique if not ans = false;
    for(let c of items){
      if(c.name.toLowerCase()===formName.toLowerCase()){
        ans=false;
        break;
      }
    }
    setFormNameValid(ans);
    return ans;
  }
  const testColorValid = ()=>{
    let ans = true;
    for(let c of items){
      if(c.color===formColor){
        ans=false;
        break;
      }
    }
    setFormColorValid(ans);
    return ans;
    // for all colors in palette check 
  }
  const testColorsValid = ()=>{
    return items.length>0;
  }
  const testTitleValid = ()=>{
    let ans = paletteTitle!=="";
    // also check titles of other palettes
    setValidPaletteTitle(ans);
    return ans;
  }
  const handleNameChange = (e)=>{
    setFormNameValid(true);
    setAutoFormName(false);
    setFormName(e.target.value);
  }
  const handleTitleChange = (e)=>{
    setValidPaletteTitle(true);
    setPaletteTitle(e.target.value);
  }
  const handleColorSubmit = (e)=>{
    if(testNameValid() && testColorValid()){
      addColor({color:formColor,name:formName});
      setFormName("");
    }
  }
  const handlePaletteSubmit = (e)=>{
    if(testTitleValid() && testColorsValid()){
      addPalette(
        {
          paletteName:paletteTitle,
          id:paletteTitle.toLowerCase().replace(" ","-"),
          emoji:"🎨",
          colors:[...items]
        }
      )
      navigate("/palettes")
    }
  }

  return(
      <PageView2 style={{overflow:"hidden"}}>
        <Content>
          <PaletteViewHeader>
            <BackButton onClick={()=>navigate("/palettes")}>{"<- Back"}</BackButton>
            <TitleInput error={!validPaletteTitle} placeholder="New Palette" value={paletteTitle} onChange={handleTitleChange}/>
            <SpaceFiller/>
          </PaletteViewHeader>
          <SortableList style={{width:"90%"}} items={items} onSortEnd={sortEnd} axis="xy"/>
        </Content>
        <SideBar>
          <Button variant="contained" sx={{margin:"20px",marginBottom:"40px",padding:"20px",width:"80%",backgroundColor:"green"}}
            onClick={handlePaletteSubmit}>
              Save Palette
          </Button>
          <Button variant="contained" sx={{margin:"5px"}}
            onClick={handleRandomColor}>
              Random Color
          </Button>
          <ColorPicker color={formColor} onChange={changeColor}/>
          <NameInput label="Color Name" value={formName} onChange={handleNameChange} error={!formNameValid}/>
          <Button variant="contained" onClick={handleColorSubmit}>Add color</Button>
          <div style={{flex:1}}/>
          <Button variant="contained" sx={{margin:"20px",padding:"20px",width:"80%",backgroundColor:"red"}}
            onClick={handleRemoveLast}>
              Remove Last in Grid
          </Button>
        </SideBar>
      </PageView2>
  )
}