import utilsCss from "../../utils.module.css";
import css from './Information.module.css';
 
export default function Information() {
    return (
        <section className={css.informationBanner}>
        <div className={utilsCss.container}>
        <h1 className={css.infoTitle}>Information</h1>
       <p>Here you can get detailed information about the 
        game you are interested in. At the moment there is 
        information about the games presented on the main page. 
        Thanks for waiting</p>
        </div>
        </section>    
    )   
}