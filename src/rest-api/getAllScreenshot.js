import { BASE_URL } from "./getAllTopGames";

export function getAllScreenshot() {
    return fetch(`${BASE_URL}/screenshots`)
    .then(resp => resp.json())
    .catch()
};