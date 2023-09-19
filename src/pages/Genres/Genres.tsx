import { useState, useEffect } from "react";
import { getAllGamesForGenres } from "../../rest-api/getAllGamesForGenres";
import processData from "../../utils/processData";
import GenresName from "../../components/GanresName/GanresName";
import GenresList from "../../components/GenresList/GenresList";
import utilsCss from "../../utils.module.css";



export default function Genres() {
    const [games, setGames] = useState([]);
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [activeGenre, setActiveGenre] = useState<string | null>(null);
    const filteredGames = processData(games);
    
 
    useEffect(() => { 
        getAllGamesForGenres().then(resp => setGames(resp));
    }, []);
   
    const toggleExpand = (genre: string): void => {
        setIsExpanded(!isExpanded);
        setActiveGenre((prevGenre) => (prevGenre === genre ? null : genre));
    };



    return (
        <div className={utilsCss.container}>
            <ul>
                {filteredGames.map((game, index) => (
                    <li key={index}>
                        <GenresName
                            isActive={game.genre === activeGenre}
                            onToggle={toggleExpand}
                            genres={game.genre} />
                        {game.genre === activeGenre && (
                            <GenresList
                            isActive={game.genre === activeGenre}
                            games={game.games} />
                        )}
                    </li>
                ))}
            </ul>
        </div>);
};