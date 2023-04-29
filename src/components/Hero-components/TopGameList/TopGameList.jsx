// import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import topGame from 'utils/topGame';

  

export default function ToGameList() {
 
  return (
    <div>
      <h2>Top games in different genres</h2>
      <ul>
        {topGame.map(game => (
         <li key={game.id}>
           <img width={300} height={450} src={game.img} alt="game-poster" />
           <p>{game.name}</p>
           {game.genre.map(genre => <p key={genre}>{genre}</p>)}
            <Link to={`/detailed/${game.id}`}>Details</Link>
          </li>
       ))}
      </ul>
     </div> 
    )
}