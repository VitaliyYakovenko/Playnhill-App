import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import utilsCss from "../../../utils.module.css";
import css from './TopGameList.module.css';
import IGamesObj from '../../../interfaces/IGamesObj';


interface iProps {
    topGames: IGamesObj[];
};

type TState = string;
  
export default function ToGameList({ topGames }: iProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImg, setModalImg] = useState <TState>("");
  const [gameId, setGameId] = useState <TState>("");
  const [gameName, setGameName] = useState <TState>("");
 

  const onOpenModal = (e: React.MouseEvent<HTMLUListElement>) => {

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

  const onCloseModal = () => {
    setShowModal(false);
  }

  return (
    <section className={css.topGameSection}>
    <div className={utilsCss.container}>
      <h2 className={css.topGameTitle}>Top games in different genres</h2>
        <ul
        onClick={onOpenModal}  
        className={css.gallery}>
          
        {topGames.map(game => (
        <li className={css.galleryItem} key={game.id}>
            <img
            className={css.topGameImg}  
            data-img={game.img}
            data-id={game.id}
            data-name={game.name}  
            width={300}
            height={450}
            src={game.img}
            alt="game-poster"/>
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
    )
}