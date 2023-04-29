import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loayout from "./Loayout/Loayout";
import Home from "pages/Home/Home";
const Detailed = lazy(() => import("pages/Information/Information"));
const Blog = lazy(() => import("pages/Blog/Blog"));
const ContactUs = lazy(() => import("pages/Genres/Genres"));
const Studies = lazy(() => import("pages/Technologies/Technologies"));



export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Loayout/>} >
        <Route index element={<Home />} />
        <Route path="/detailed/:gameId" element={<Detailed />}/>
         <Route path="info" element={<div>info</div>} />
         <Route path="info-2" element={<div>info</div>} /> 
        <Route />
        <Route path="/genres" element={<Blog />} />
        <Route path="/application" element={<ContactUs />} />
        <Route path="/technologies" element={<Studies />} />
      </Route>
   </Routes>
  </>)
}

