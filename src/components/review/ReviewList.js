import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getReviewByGameId } from "./ReviewManager.js"

export const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    const {gameId} = useParams()

    useEffect(
        () => {
            getReviewByGameId(gameId)
            .then(review => setReviews(review))
        },
        [gameId]
    )

        return (
            <>
            {
                reviews.map(review => <p>{review.review}</p>)
            }
            </>
        )
}