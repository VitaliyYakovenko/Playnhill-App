import { BASE_URL } from "./getAllTopGames";
import IGamesObj from "../interfaces/IGamesObj";

interface IData {
    resp: IGamesObj[];
}

export function getGameById(id:string):Promise<IData> {
    return fetch(`${BASE_URL}/games/${id}`)
        .then(resp => resp.json())
        .catch(error => error.message)
};