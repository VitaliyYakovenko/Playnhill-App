import Slider from "react-slick";
import css from './HeroHome.module.css';
import carLeft from 'images/car-left.jpg';
import carCenter from 'images/car-center.jpg';
import carRigth from 'images/car-rigth.jpg';

export default function HeroHome () {
    const carsArrImg = [carLeft, carCenter, carRigth];
    
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
        <div className={css.container}>
        <h1>Playnhill</h1>
         <Slider {...settings}>
        {carsArrImg.map(car => (<div key={car}>
        <div className={css.heroImg} style={{ backgroundImage: `url(${car})`}}></div>
        </div>))}
        </Slider>       
      </div>
    );
  }
