import Slider from "react-slick";
import css from './HeroHome.module.css';
import utilsCss from "../../../utils.module.css";
import IScreenshotsObj from "../../../interfaces/IScreenshotsObj";


interface IProp {
    bannerImages: IScreenshotsObj[];
}


export default function HeroHome({ bannerImages }:IProp) {


  const banners = bannerImages.map(el => el.banner);
  

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
        {banners.map(el => (<div key={el}>
        <div className={css.heroImg}
        style={{ backgroundImage: `url(${el})` }}>
        </div>
        </div>))}
        </Slider>       
      </div>
    </section>  
    );
  }
