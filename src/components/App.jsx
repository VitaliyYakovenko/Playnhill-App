import { Route, Routes } from "react-router-dom";
import Loayout from "./Loayout/Loayout";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import Blog from 'pages/Blog/Blog';
import ContactUs from "pages/ContactUs/ContactUs";
import Studies from 'pages/Studies/Studies';


export default function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Loayout/>} >
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<ContactUs />} />
        <Route path="/studies" element={<Studies/>} />
      </Route>
   </Routes>
  </>)
}

