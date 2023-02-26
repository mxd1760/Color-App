import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
}from "react-router-dom"
import {useState,createContext, useEffect} from "react";
import NewPaletteView from "./views/NewPaletteView"
import ColorView from "./views/ColorView"
import PaletteView from "./views/PaletteView"
import PaletteListView from "./views/PaletteListView"
import starterColors from "./templates/colors"



const router = createBrowserRouter(
  createRoutesFromElements(<>
      <Route path="/palettes/new" element = {<NewPaletteView/>}/>
      <Route path="/palettes/edit/:id" element = {<NewPaletteView edit/>}/>
      {/* <Route path="/palettes/edit" element = {<Navigate to="/palettes"/>}/> */}
      <Route path="/palettes/:id/:color" element={<ColorView/>}/>
      <Route path="/palettes/:id" element ={<PaletteView/>}/>
      <Route path="/palettes" element = {<PaletteListView/>}/>
      <Route path="/" element={<Navigate to="/palettes"/>}/>
    </>
  )
)

const colorKey = "colors"
const loadColors = ()=>{
  // try to find colors in local storage
  // else
  var inbound = localStorage.getItem(colorKey);
  inbound = JSON.parse(inbound);
  if (!Array.isArray(inbound) || inbound.length<=0){ 
    inbound = starterColors
  }
  return inbound
}
const saveColors = (colors)=>{
  localStorage.setItem(colorKey,JSON.stringify(colors));
}

export const ColorContext = createContext();

function App() {
  const [colors,setColors] = useState(loadColors());
  
  const addPalette = (newPalette)=>{
    setColors([...colors,newPalette]);
  };
  useEffect(()=>{
    //console.log(colors);
    saveColors(colors)
  },[colors])
  const replacePalette = (newPalette,oldPaletteId)=>{};


  return (
    <ColorContext.Provider value={{add:addPalette,replace:replacePalette,rawColors:colors}}>
      <RouterProvider router={router}/>
    </ColorContext.Provider>
  );
}

export default App;
