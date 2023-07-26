import { BASE_URL } from "./getAllTopGames";
import IScreenshotsObj from "../interfaces/IScreenshotsObj";


interface IData {
    resp: IScreenshotsObj[];
}

export function getAllScreenshot(): Promise<IData[]> {
    return fetch(`${BASE_URL}/screenshots`)
    .then(resp => resp.json())
    .catch()
};