import Slider from "react-slick";
import utilsCss from "../../../utils.module.css";
import css from "./ElementBar.module.css"; 
import IScreenshotsObj from "../../../interfaces/IScreenshotsObj";
import ISettings from "../../../interfaces/ISettings";

interface IProp {
  screenshots: IScreenshotsObj[];
}



export default function ElementBar({screenshots}: IProp) {
       
    const settings:ISettings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 8000,  
    };

    return (
        <section className={css.elementBarSection}>
         <div className={utilsCss.container}>   
        <h2 className={css.elemBarTitle}>Screenshot</h2>
            <Slider {...settings}>
            {screenshots.map(el => (
            <div key={el.screenshot}>
            <img src={el.screenshot}
            width="620"
            height="360"            
            alt="screenshot" />        
            </div>))}
           </Slider>
         </div>
        </section>
    )
}