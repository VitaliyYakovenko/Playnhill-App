import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Loayout from "./Loayout/Loayout";
import Home from "../pages/Home/Home";
import InformationById from "../pages/InformationById/InformationById";
const Plot = lazy(() => import("../components/Information-components/Plot/Plot"));
const Creators = lazy(() => import("../components/Information-components/Creators/Creators"));
const Information = lazy(() => import('../pages/Information/Information'));
const Genres = lazy(() => import("../pages/Genres/Genres"));
const MyFavoriteGames = lazy(() => import("../pages/MyFavoriteGames/MyFavoriteGames"));
const Technologies = lazy(() => import("../pages/Technologies/Technologies"));


export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Loayout/>} >
        <Route index element={<Home />} />
        <Route path="/detailed" element={<Information/>} /> 
        <Route path="/detailed/:gameId" element={<InformationById/>}>
          <Route path="plot" element={<Plot/>} />
          <Route path="creators" element={<Creators/>} /> 
        </Route>
        <Route path="/genres" element={<Genres/>} />
        <Route path="/favorite-games" element={<MyFavoriteGames/>} />
        <Route path="/technologies" element={<Technologies />} />
      </Route>
   </Routes>
  </>)
}





