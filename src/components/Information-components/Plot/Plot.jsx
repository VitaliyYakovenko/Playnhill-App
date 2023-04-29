import { useParams } from "react-router-dom";
import topGame from 'utils/topGame';

export default function Plot() {
    const { gameId } = useParams();    
    return (<>
    <p>{topGame[gameId - 1].plot}</p>
    </>)
}