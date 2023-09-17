import { BASE_URL } from "./getAllTopGames";



export function getAllGamesForGenres() {
    return fetch(`${BASE_URL}/games`)
        .then(resp => resp.json())
        .catch(error => error.message);
};