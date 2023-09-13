import { BASE_URL } from "./getAllTopGames";
import { getGameById } from "./getGameById";


export async function  updateFavoriteById(id: string) {
    const response = await getGameById(id);
    const { favorite } = response;

    const newResponse = await fetch(`${BASE_URL}/games/${id}`, {
        method: "PUT",
        body: JSON.stringify({ favorite: !favorite }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });
    const newData = await newResponse.json();
    return newData;
}