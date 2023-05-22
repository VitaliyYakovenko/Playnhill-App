import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'components/Modal/Modal';
import topGame from 'utils/topGame';
import css from './TopGameList.module.css';


  

export default function ToGameList() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const onOpenModal = (e) => {
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
    <section>
    <div className={css.container}>
      <h2>Top games in different genres</h2>
        <ul
        onClick={onOpenModal}  
        className={css.gallery}>
        {topGame.map(game => (
        <li className={css.galleryItem} key={game.id}>
            <img 
            data-img={game.img}
            width={300}
            height={450}
            src={game.img}
            alt="game-poster"/>
           <p>{game.name}</p>
           {game.genre.map(genre => <p key={genre}>{genre}</p>)}
            <Link to={`/detailed/${game.id}`}>Details</Link>
            {showModal && <Modal onCloseModal={onCloseModal} modalImg={modalImg}/>}
        </li>
       ))}
      </ul>
     </div>
    </section>
    )
}