import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Slider from "react-slick";
import { getGameById } from "rest-api/getGameById";
import css from './Infromation.module.css';



export default function Information() {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  
  useEffect(() => {
    getGameById(gameId).then(resp => setGame(resp));
 
   }, [gameId]);

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
        <>
        <div className={css.container}>
        <h1>Playnhill</h1>
         <Slider {...settings}>
        {game.sliderImg?.map(img => (<div key={img}>
        <div className={css.heroImg} style={{ backgroundImage: `url(${img})`}}></div>
        </div>))}
        </Slider>         
        <h1>Detailed information about {game.name}</h1>
        <p>{game.details}</p> 
        <img src={""} width={100} height={100} alt="img" />
        <div>
          <Link to="plot">
          <button>Plot</button>
          </Link>
          <Link to="creators">
          <button>Creators</button>
          </Link>
        </div>
        <Suspense fallback={<p>...loading</p>}>
          <Outlet/>
        </Suspense>
        </div>
        </>    
    )
}



