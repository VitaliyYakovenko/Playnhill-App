import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SelectLabels from "../Lang-bar/Lang-bar";
import Footer from "../Footer/Footer";
import utilsCss from "../../utils.module.css";
import css from "./Loayout.module.css";



export default function Loayout() {
    return (<>
    <header className={css.header}>
    <div className={utilsCss.container}>
    <div className={css.footerFlex}>            
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
        <NavLink to='/favorite-games'>My favorite games</NavLink>                
        </li>
        <li className={css.navItem}>
        <NavLink to='/technologies'>Technologies</NavLink>                
        </li>        
    </ul>            
    </nav>
    </div>                
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