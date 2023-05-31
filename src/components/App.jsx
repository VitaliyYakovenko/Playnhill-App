import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loayout from "./Loayout/Loayout";
import Home from "pages/Home/Home";
const Information = lazy(() => import('pages/Information/Information'));
const DetailedById = lazy(() => import("pages/InformationById/Information"));
const Blog = lazy(() => import("pages/Blog/Blog"));
const ContactUs = lazy(() => import("pages/Genres/Genres"));
const Studies = lazy(() => import("pages/Technologies/Technologies"));
const Plot = lazy(() => import("components/Information-components/Plot/Plot"));
const Creators = lazy(() => import("components/Information-components/Creators/Creators"));


export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Loayout/>} >
        <Route index element={<Home />} />
        <Route path="/detailed" element={<Information/>} /> 
        <Route path="/detailed/:gameId" element={<DetailedById/>}>
          <Route path="plot" element={<Plot/>} />
          <Route path="creators" element={<Creators/>} /> 
        </Route>
        <Route path="/genres" element={<Blog />} />
        <Route path="/application" element={<ContactUs />} />
        <Route path="/technologies" element={<Studies />} />
      </Route>
   </Routes>
  </>)
}





