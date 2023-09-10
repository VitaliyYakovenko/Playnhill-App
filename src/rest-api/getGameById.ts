import { BASE_URL } from "./getAllTopGames";



export function getGameById(id:string) {
    return fetch(`${BASE_URL}/games/${id}`)
        .then(resp => resp.json())
        .catch(error => error.message)
};