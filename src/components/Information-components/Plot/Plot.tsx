import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../../rest-api/getGameById";


export default function Plot() {
     const { gameId } = useParams<{ gameId: string | any}>(); 
    const [plot, setPlot] = useState("");

    useEffect(() => {
        getGameById(gameId).then((resp:any) => setPlot(resp.plot));
    }, [gameId]);

    return (<>
    <p>{plot}</p>
    </>)
}