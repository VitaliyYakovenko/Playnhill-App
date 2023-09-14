import { useState, useEffect } from "react";
import utilsCss from "../../utils.module.css";
import { getAllFavoriteGames } from "../../rest-api/getAllFavoriteGames";
import IGamesObj from "../../interfaces/IGamesObj";


export default function MyFavoriteGames() {
    const [favoriteGames, setFavoriteGames] = useState<IGamesObj[]>([]);

    useEffect(() => {
        getAllFavoriteGames().then(resp => setFavoriteGames(resp));
    }, []);
 
    console.log(favoriteGames);

    return (
        <section>
           <div className={utilsCss.container}>MyFavoriteGames</div> 
        </section>
       )
};
