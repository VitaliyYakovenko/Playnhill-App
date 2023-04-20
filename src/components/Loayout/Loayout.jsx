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
        <NavLink></NavLink>        
        </li>
        <li>
        <NavLink></NavLink>        
        </li>       
         </ul>            
    </nav>    
    </header>
    <main>
     <Outlet/>        
    </main>    
    </>)
}