import { BASE_URL } from "./getAllTopGames";


export function getGameById(id) {
    return fetch(`${BASE_URL}/top-games/${id}`)
        .then(resp => resp.json())
        .catch(error => error.message)
};