import { nanoid } from "nanoid";
import utilsCss from "utils.module.css";
import css from "./IconBand.module.css";
import icons from "utils/iconArr";




export default function IconBand() {
    
 

    return (
        <section className={css.IconBandSection}>
        <div className={utilsCss.container}>
        <ul className={css.iconList}>
        {icons.map(icon => (
        <li className={css.iconItem} key={`id ${nanoid()}`}>
        <img className={css.icon} src={icon}
        width="150"
        height="100"
        alt="icon" />                    
        </li>
        ))}        
        </ul>          
        </div>
        </section>    
    )

};