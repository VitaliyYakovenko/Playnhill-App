import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameById } from "../../../rest-api/getGameById";




export default function Creators() {
    const { gameId } = useParams<{ gameId: string | any }>();
    const [creators, setCreators] = useState([]);

    useEffect(() => { 
        getGameById(gameId)
        .then((resp) => setCreators(resp.creatorsCompany))
    }, [gameId]);

    
    return (
        <>
            <ul>
                {creators.map(company => (
                    <li key={company}>
                        <span>{company}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};