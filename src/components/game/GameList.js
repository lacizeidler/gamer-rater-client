import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getGames } from "./GameManager.js"

export const GameList = () => {
    const [games, setGames] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getGames()
                .then(game => setGames(game))
        }, []
    )

    return (
        <>
            <button
                onClick={
                    () => {
                        history.push("/games/new")
                    }
                }>
                New Game
            </button>

            <article>
                {
                    games.map(
                        (game) => {
                            return <section key={`game__${game.id}`}>
                                <Link to={`/games/${game.id}`}>{game.title}</Link>
                            </section>
                        }
                    )
                }
            </article>
        </>
    )
}