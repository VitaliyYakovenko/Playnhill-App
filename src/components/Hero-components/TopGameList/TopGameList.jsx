import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import utilsCss from "utils.module.css";
import css from './TopGameList.module.css';

  

export default function ToGameList({topGames}) {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const onOpenModal = (e) => {

    if(showModal)  return

    if (e.target.nodeName === "IMG") {
      const { img } = e.target.dataset;
      setShowModal(true)
      setModalImg(img); 
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
            {showModal && <Modal onCloseModal={onCloseModal} modalImg={modalImg}/>}
        </li>
       ))}
        </ul>
     </div>
    </section>
    )
}