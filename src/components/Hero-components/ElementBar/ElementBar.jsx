import Slider from "react-slick";
import screenshots from "../../../utils/screenshot";
import utilsCss from "utils.module.css";


export default function ElementBar() {
       
    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 5000,  
    };

    return (
        <>
         <div className={utilsCss.container}>   
        <h2>Screenshot</h2>
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
        </>
    )
}