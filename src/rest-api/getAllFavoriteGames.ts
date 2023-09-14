import { BASE_URL } from "./getAllTopGames";
import IGamesObj from "../interfaces/IGamesObj";



export function getAllFavoriteGames() {
    return fetch(`${BASE_URL}/games`)
        .then(resp => resp.json())
        .then((games: IGamesObj[]) => games.filter(el => el.favorite))
        .catch(error => error.message);
};