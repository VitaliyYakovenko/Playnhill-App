import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import SelectLabels from "components/Lang-bar/Lang-bar";
import Footer from "components/Footer/Footer";



export default function Loayout() {
    return (<>
    <header>
    <SelectLabels/>      
    <nav>
    <ul>
        <li>
        <NavLink to="/">Home</NavLink>        
        </li>
        <li>
        <NavLink to='/detailed'>Detailed information</NavLink>        
        </li>
        <li>
        <NavLink to='/genres'>Game genres</NavLink>                
        </li>
        <li>
        <NavLink to='/application'>Application information</NavLink>                
        </li>
        <li>
        <NavLink to='/technologies'>Technologies</NavLink>                
        </li>        
         </ul>            
    </nav>    
    </header>
    <main>
    <Suspense fallback={<p>Loading...</p>}>
    <Outlet/> 
    </Suspense>              
    </main>
    <Footer/>    
    </>)
}