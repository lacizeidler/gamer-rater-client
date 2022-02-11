import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { createGame } from "./GameManager"

export const GameForm = () => {
    const history = useHistory()
    const [newGame, setNewGame] = useState({
        title: "",
        description: "",
        designer: "",
        year_released: "",
        number_of_players: 0,
        estimated_time_to_play: 0,
        age_recommendation: 0
    })

    const changeGameState = (event) => {
        const copy = { ...newGame }
        const key = event.target.name
        const value = event.target.value
        copy[key] = value
        setNewGame(copy)
    }

    return (
        <>
            <form>
                <h2>
                    Create New Game
                </h2>
                <fieldset>
                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            name="title"
                            required autoFocus
                            className="form_control"
                            value={newGame.title}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Description</label>
                        <input
                            type="text"
                            name="description"
                            required autoFocus
                            className="form_control"
                            value={newGame.description}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Designer</label>
                        <input
                            type="text"
                            name="designer"
                            required autoFocus
                            className="form_control"
                            value={newGame.designer}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Year Released</label>
                        <input
                            type="date"
                            name="year_released"
                            required autoFocus
                            className="form_control"
                            value={newGame.year_released}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Number of Players</label>
                        <input
                            type="number"
                            name="number_of_players"
                            required autoFocus
                            className="form_control"
                            value={newGame.number_of_players}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Estimated Time to Play (Hours)</label>
                        <input
                            type="number"
                            name="estimated_time_to_play"
                            required autoFocus
                            className="form_control"
                            value={newGame.estimated_time_to_play}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>Recommended Age</label>
                        <input
                            type="number"
                            name="age_recommendation"
                            required autoFocus
                            className="form_control"
                            value={newGame.age_recommendation}
                            onChange={changeGameState}
                        />
                    </div>
                </fieldset>
                <button
                type="submit"
                onClick={
                    (evt) => {
                        evt.preventDefault()

                        const game = {
                            title: newGame.title,
                            description: newGame.description,
                            designer: newGame.designer,
                            year_released: newGame.year_released,
                            number_of_players: newGame.number_of_players,
                            estimated_time_to_play: newGame.estimated_time_to_play,
                            age_recommendation: newGame.age_recommendation
                        }

                        createGame(game)
                        .then(() => history.push("/games"))
                }}
                >
                    Create
                </button>
            </form>
        </>
    )

}