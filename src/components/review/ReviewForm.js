import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { createReview, getReviewByGameId, getReviews } from "./ReviewManager"

export const ReviewForm = () => {
    const {gameId} = useParams()
    const history = useHistory()
    const [newReview, setNewReview] = useState({
        review: "",
        game: parseInt(gameId)
    })

    const changeReviewState = (event) => {
        const copy = {...newReview}
        const key = event.target.name
        const value = event.target.value
        copy[key] = value
        setNewReview(copy)
    }

    return (
        <>
        <form>
            <h2>
                Write a Review
            </h2>
            <fieldset>
                <div>
                    <input
                    type="text"
                    name="review"
                    required autoFocus
                    className="form_control"
                    value={newReview.review}
                    onChange={changeReviewState}
                    />
                </div>
            </fieldset>
            <button
            type="submit"
            onClick={
                (evt) => {
                    evt.preventDefault()

                    const review = {
                        review: newReview.review,
                        game: newReview.game
                    }

                    createReview(review)
                    .then(() => history.push("/games"))
                }
            }
            >
                Submit
            </button>
        </form>
        </>
    )
}