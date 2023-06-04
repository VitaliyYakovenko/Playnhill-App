import Slider from "react-slick";
import css from './HeroHome.module.css';
import utilsCss from "utils.module.css";


export default function HeroHome ({carsArrImg}) {

    
    const settings = {
      // dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 5000,
      
    };
    
  return (
    <section className={css.sectionHeroHome}>
    <div className={utilsCss.container}>
        <h1>Playnhill</h1>
         <Slider {...settings}>
        {carsArrImg.map(car => (<div key={car}>
        <div className={css.heroImg} style={{ backgroundImage: `url(${car})`}}></div>
        </div>))}
        </Slider>       
      </div>
    </section>  
    );
  }
