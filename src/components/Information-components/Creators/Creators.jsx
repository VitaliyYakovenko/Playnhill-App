import { useParams } from "react-router-dom";
import topGame from 'db/topGame';

export default function Creators() {
    const { gameId } = useParams();
    
    return (
        <>
        <ul>
         {topGame[gameId - 1].creatorsCompany.map(company => (
          <li key={company}>
          <span>{company}</span>       
         </li>    
         ))}        
        </ul>
        </>
    )
};