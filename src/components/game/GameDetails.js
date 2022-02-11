import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min"
import { ReviewList } from "../review/ReviewList"
import { getGameById } from "./GameManager"


export const GameDetail = () => {
    const history = useHistory()
    const {gameId} = useParams()
    const [game, modifyGame] = useState({})

    useEffect(
        () => {
            getGameById(gameId)
            .then((game) => modifyGame(game))
        },
        [gameId]
    )


    return (
        <>
        <form>
           <div>
               <h3>Title</h3>
               <p>{game.title}</p>
           </div>
           <div>
               <h3>Description</h3>
               <p>{game.description}</p>
           </div>
           <div>
               <h3>Designer</h3>
               <p>{game.designer}</p>
           </div>
           <div>
               <h3>Year Released</h3>
               <p>{game.year_released}</p>
           </div>
           <div>
               <h3>Number of Players</h3>
               <p>{game.number_of_players}</p>
           </div>
           <div>
               <h3>Estimated Time to Play</h3>
               <p>{game.estimated_time_to_play} hour(s)</p>
           </div>
           <div>
               <h3>Age Recommendation</h3>
               <p>{game.age_recommendation}</p>
           </div>
           </form>
           <button
           onClick={
               () => {
                history.push(`/games/review/${gameId}`)
               }
           }
           >
               Leave a Review
           </button>
           <ReviewList/>
        </>
    )
}