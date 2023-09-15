import Slider from "react-slick";
import css from './HeroHome.module.css';
import utilsCss from "../../../utils.module.css";
import IScreenshotsObj from "../../../interfaces/IScreenshotsObj";
import ISettings from "../../../interfaces/ISettings";
import Title from "../../Title/Title";


interface IProp {
    bannerImages: IScreenshotsObj[];
}


export default function HeroHome({ bannerImages }:IProp) {
  const banners = bannerImages.map(el => el.banner);
  

    const settings:ISettings = {
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
        <Title/>
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
