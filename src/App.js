import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
}from "react-router-dom"
import NewPaletteView from "./views/NewPaletteView"
import ColorView from "./views/ColorView"
import PaletteView from "./views/PaletteView"
import PaletteListView from "./views/PaletteListView"
import colors from "./templates/colors"





const router = createBrowserRouter(
  createRoutesFromElements(<>
      <Route path="/palettes/new" element = {<NewPaletteView/>}/>
      <Route path="/palettes/edit/:id" element = {<NewPaletteView/>}/>
      <Route path="/palettes/edit" element = {<Navigate to="/palettes"/>}/>
      <Route path="/palettes/:id/:color" element={<ColorView colors={colors}/>}/>
      <Route path="/palettes/:id" element ={<PaletteView colors={colors}/>}/>
      <Route path="/palettes" element = {<PaletteListView colors={colors}/>}/>
      <Route path="/" element={<Navigate to="/palettes"/>}/>
    </>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
