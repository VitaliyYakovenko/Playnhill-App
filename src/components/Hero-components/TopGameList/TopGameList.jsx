import { Link } from 'react-router-dom';
import topGame from 'utils/topGame';
import css from './TopGameList.module.css';

  

export default function ToGameList() {
 
  return (
    <section>
    <div className={css.container}>
      <h2>Top games in different genres</h2>
      <ul className={css.gallery}>
        {topGame.map(game => (
         <li className={css.galleryItem} key={game.id}>
           <img width={300} height={450} src={game.img} alt="game-poster" />
           <p>{game.name}</p>
           {game.genre.map(genre => <p key={genre}>{genre}</p>)}
            <Link to={`/detailed/${game.id}`}>Details</Link>
          </li>
       ))}
      </ul>
     </div>
    </section>
    )
}