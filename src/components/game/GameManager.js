export const getGames = () => {
    return fetch("http://localhost:8000/games", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const createGame = (game) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(game)
    }
    return fetch(`http://localhost:8000/games`, fetchOptions)
    .then(response => response.json())
}

export const getGameById = (id) => {
    return fetch(`http://localhost:8000/games/${id}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}