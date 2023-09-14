import React,{ useEffect, useState ,Suspense} from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import Title from "../../components/Title/Title";
import SliderGame from "../../components/Information-components/SliderGame/SliderGame";
import { getGameById } from "../../rest-api/getGameById";
import css from './Infromation.module.css';
import IGamesObj from "../../interfaces/IGamesObj";



const InformationById: React.FC | any = () => {

  const { gameId } = useParams < { gameId: string | any}>(); 
  const [game, setGame] = useState<IGamesObj>();
  

  useEffect(() => {
    getGameById(gameId).then((resp) => setGame(resp));
 
  }, [gameId]);
  

  
  if (!game) {
   return   <p>Not found game</p>
  }
  
  if (game) {
    return (
      <>
        <div className={css.container}>
          <Title/>
          <SliderGame images={game.sliderImg}/>

          <h1>Detailed information about {game.name}</h1>
          <p>{game.details}</p>

          <div>
            <Link to="plot">
              <button>Plot</button>
            </Link>
            <Link to="creators">
              <button>Creators</button>
            </Link>
          </div>
          <Suspense fallback={<p>...loading</p>}>
            <Outlet />
          </Suspense>
        </div>
      </>
    )
  }
}

export default InformationById;

