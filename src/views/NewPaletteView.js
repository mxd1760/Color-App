import { Drawer, IconButton } from "@mui/material";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { PaletteViewHeader,BackButton,Title, PageView2, SpaceFiller } from "../styles/shared";
import styled from "styled-components";
import CheveronLeftIcon from "@mui/icons-material/ChevronLeft"
import { ChevronRight } from "@mui/icons-material";

const NotDrawer = styled.div`
  flex:1;
  positiion:fixed;
`
const DrawerHeader = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:10px;
  height:10vh;
  background-color:blue;
`
const DrawerContent = styled.div`
  flex:1;
  width:20vw;
`

export default function NewPaletteView({editing=false}){
  const navigate = useNavigate();
  const [showDrawer,setShowDrawer] = useState(true)

  const makeDrawerDisappear = ()=>{
    setShowDrawer(false)
  }
  const makeDrawerAppear = ()=>{
    setShowDrawer(true)
  }
  return(
      <PageView2>
        <NotDrawer>
          <PaletteViewHeader>
            <BackButton onClick={()=>navigate("/palettes")}>{"<- Back"}</BackButton>
            <Title>NewPaletteView</Title>
            <SpaceFiller/>
            <IconButton sx={{padding:"10px"}} onClick={makeDrawerAppear}>
              <CheveronLeftIcon/>
            </IconButton>
          </PaletteViewHeader>
        </NotDrawer>
        <Drawer sx={{width:"200px", backgroundColor:"blue"}} variant="persistent" anchor="right" open={showDrawer}>
          <DrawerHeader>
            <IconButton onClick={makeDrawerDisappear}>
              <ChevronRight/>
            </IconButton>
          </DrawerHeader>
          <DrawerContent>

          </DrawerContent>
        </Drawer>
      </PageView2>
  )
}