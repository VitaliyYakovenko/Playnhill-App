import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import utilsCss from "../../../utils.module.css";
import css from './TopGameList.module.css';
import { updateFavoriteById } from '../../../rest-api/updateFavoriteById';
import IGamesObj from '../../../interfaces/IGamesObj';
import iconStarNoFavorite from "../../../images/iconStarNoFavorite.svg";
import iconStarFavorite from "../../../images/starFavorite.svg";


interface iProps {
   topGames: IGamesObj[];
   changeFavorite: (id: string) => void;
};


export default function ToGameList({ topGames ,changeFavorite}: iProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState <string>("");
  const [gameId, setGameId] = useState <string>("");
  const [gameName, setGameName] = useState<string>("");


  const onOpenModal = (e: React.MouseEvent<HTMLUListElement>):void => {

   if(showModal)  return
 
   const targetElement = e.target as HTMLElement;

  if (targetElement.nodeName === "IMG") {

    const { img, id, name } = targetElement.dataset as DOMStringMap;
  
      if (img && id && name) {
      setShowModal(true);
      setModalImg(img);
      setGameId(id);
      setGameName(name);
    }
     }
  }

  const onCloseModal = ():void => {
    setShowModal(false);
  }
  
  const onClickFavorite = (id: string): void => {
    updateFavoriteById(id);
    changeFavorite(id);
  };
  

  return (
    <section className={css.topGameSection}>
      <div className={utilsCss.container}>
        <h2 className={css.topGameTitle}>Top games in different genres</h2>
        <ul
          onClick={onOpenModal}
          className={css.gallery}>
          
          {topGames.map(game => (
            <li className={css.galleryItem} key={game.id}>
              <div className={css.galleryImgBox}>
                <div onClick={() => onClickFavorite(game.id)}>
                  {game.favorite
                    ? <img className={css.iconFavorite} src={iconStarFavorite} alt={"icon-star"} />
                    : <img className={css.iconFavorite} src={iconStarNoFavorite} alt={"icon-star"} />
                  }
                </div>
                <img
                  className={css.topGameImg}
                  data-img={game.img}
                  data-id={game.id}
                  data-name={game.name}
                  width={300}
                  height={450}
                  src={game.img}
                  alt="game-poster" />
              </div>
              <p className={css.topGameName}>{game.name}</p>
              {game.genre.map(genre => <p
                className={css.topGameGanre}
                key={genre}>{genre}
              </p>)}
              <Link className={css.topGameLink}
                to={`/detailed/${game.id}`}>Details</Link>
            
              {showModal && <Modal
                onCloseModal={onCloseModal}
                modalImg={modalImg}
                gameName={gameName}
                gameId={gameId}
              />}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}