import { Route, Routes } from "react-router-dom";
import Loayout from "./Loayout/Loayout";
import Home from "pages/Home";

export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Loayout/>} >
      <Route index element={<Home/>} />
      </Route>
   </Routes>
  </>)
}

