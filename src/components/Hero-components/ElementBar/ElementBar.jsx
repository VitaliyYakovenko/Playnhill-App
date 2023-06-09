import Slider from "react-slick";
import utilsCss from "utils.module.css";
import css from "./ElementBar.module.css"; 


export default function ElementBar({screenshots}) {
       
    const settings = {
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
            <div key={el}>
            <img src={el.img}
            width="620"
            height="360"            
            alt="screenshot" />        
            </div>))}
           </Slider>
         </div>
        </section>
    )
}