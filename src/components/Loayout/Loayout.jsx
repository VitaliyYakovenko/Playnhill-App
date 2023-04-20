import Footer from "components/Footer/Footer"
import { NavLink,Outlet} from "react-router-dom"


export default function Loayout() {
    return (<>
    <header>
    <nav>
    <ul>
        <li>
        <NavLink to="/">Home</NavLink>        
        </li>
        <li>
        <NavLink to='/about'>About Us</NavLink>        
        </li>
        <li>
        <NavLink to='/blog'>Blog</NavLink>                
        </li>
        <li>
        <NavLink to='/contacts'>Contact Us</NavLink>                
        </li>
        <li>
        <NavLink to='/studies'>Case Studies</NavLink>                
        </li>                
         </ul>            
    </nav>    
    </header>
    <main>
     <Outlet/>        
    </main>
    <Footer/>    
    </>)
}