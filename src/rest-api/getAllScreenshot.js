import { BASE_URL } from "./getAllTopGames";

export function getAllScreenshot() {
    return fetch(`${BASE_URL}/screenshot`)
    .then(resp => resp.json())
    .catch()
};