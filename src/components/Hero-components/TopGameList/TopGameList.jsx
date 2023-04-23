// import { useEffect, useState } from 'react';
import topGame from 'utils/topGame';

  

export default function ToGameList() {
  console.log(topGame);

  return (
    <div>
      <h2>Top games about which there is detailed information</h2>
      <ul>
       {topGame.map(game => (
         <li key={game.id}>
           <img width={300} height={450} src={game.img} alt="game-poster" />
           <p>{game.name}</p>
           {game.genre.map(genre => <p key={genre}>{genre}</p>)}
       </li>  
       ))}
      </ul>
     </div> 
    )
}