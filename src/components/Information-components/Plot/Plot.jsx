import { useParams } from "react-router-dom";
import topGame from 'db/topGame';

export default function Plot() {
    const { gameId } = useParams();    
    return (<>
    <p>{topGame[gameId - 1].plot}</p>
    </>)
}