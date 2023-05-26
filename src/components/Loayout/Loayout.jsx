import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SelectLabels from "components/Lang-bar/Lang-bar";
import Footer from "components/Footer/Footer";
import css from "./Loayout.module.css";



export default function Loayout() {
    return (<>
    <header className={css.header}>
    <div className={css.container}>       
    <SelectLabels/>      
    <nav>
    <ul className={css.navList}>
        <li className={css.navItem}>
        <NavLink to="/">Home</NavLink>        
        </li>
        <li className={css.navItem}>
        <NavLink to='/detailed'>Detailed information</NavLink>        
        </li>
        <li className={css.navItem}>
        <NavLink to='/genres'>Game genres</NavLink>                
        </li>
        <li className={css.navItem}>
        <NavLink to='/application'>Application information</NavLink>                
        </li>
        <li className={css.navItem}>
        <NavLink to='/technologies'>Technologies</NavLink>                
        </li>        
    </ul>            
    </nav> 
    </div>            
    </header>
    <main>
    <Suspense fallback={<p>Loading...</p>}>
    <Outlet/> 
    </Suspense>              
    </main>
    <Footer/>    
    </>)
}