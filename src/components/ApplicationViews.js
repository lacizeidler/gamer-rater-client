import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./category/CategoryForm"
import { CategoryList } from "./category/CategoryList"
import { GameDetail } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { GameList } from "./game/GameList"
import {ReviewForm} from "./review/ReviewForm"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem"
        }}>
            <Route exact path = "/categories">
                <CategoryList/>
            </Route>
            <Route exact path = "/games">
                <GameList/>
            </Route>
            <Route exact path = "/categories/new">
                <CategoryForm/>
            </Route>
            <Route exact path = "/games/new">
                <GameForm/>
            </Route>
            <Route exact path = "/games/:gameId(\d+)">
                <GameDetail/>
            </Route>
            <Route exact path = "/games/review/:gameId(\d+)">
                <ReviewForm/>
            </Route>
        </main>
    </>
}
