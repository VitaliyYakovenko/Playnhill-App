import { Link } from "react-router-dom";
import IGamesObj from "../../interfaces/IGamesObj";
import css from "./GenresList.module.css";

interface IProp {
    games: IGamesObj[];
    isActive: boolean;
}

export default function GenresList({isActive,games}:IProp) {

    return (
        <>
            {isActive && <ul className={`${css.gameList} ${isActive ? 'active' : ''}`}>
                {games.map(game => (
                    <li className={css.gameItem} key={game.id}>
                        <img
                            width="300" height="450"
                            src={game.img}
                            alt="banner game"
                            className={css.gameImg}
                        />
                        <Link  to={`/detailed/${game.id}`} className={css.gameName}>{game.name}</Link>
                    </li>
                ))}
            </ul>}
        </>
    );
};