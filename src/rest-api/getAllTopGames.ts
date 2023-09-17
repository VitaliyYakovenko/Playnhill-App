export const BASE_URL = `https://6481bf9329fa1c5c5031fa88.mockapi.io/api/v1`;


export function getAllTopGames(page = 1, limit = 8): Promise<[]> {
    return fetch(`${BASE_URL}/games?page=${page}&limit=${limit}`)
        .then(resp => resp.json())
        .catch(error => error.message);
};
