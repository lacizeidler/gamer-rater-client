export const getReviews = () => {
    return fetch("http://localhost:8000/reviews", {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}

export const createReview = (review) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        },
        body: JSON.stringify(review)
    }
    return fetch(`http://localhost:8000/reviews`, fetchOptions)
    .then(response => response.json())
}

export const getReviewByGameId = (gameId) => {
    return fetch(`http://localhost:8000/reviews/${gameId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("gr_token")}`
        }
    })
    .then(res => res.json())
}