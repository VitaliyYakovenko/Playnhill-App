import Slider from "react-slick";
import css from "./SliderGame.module.css";


interface IProp {
  images: string[]; 
}


export default function SliderGame({images}: IProp) {


   const settings = {
    //   dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 5000,     
  };

  return (
    <Slider {...settings}>
      {images.map(img => (<div key={img}>
        <div className={css.heroImg}
          style={{ backgroundImage: `url(${img})` }}>
        </div>
      </div>))}
    </Slider>
  );
    
   
};