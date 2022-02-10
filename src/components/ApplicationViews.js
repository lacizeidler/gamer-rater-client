import React from "react"
import { Route } from "react-router-dom"
import { CategoryForm } from "./category/CategoryForm"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem"
        }}>
            <Route exact path = "/categories">
                <CategoryList/>
            </Route>
            <Route exact path = "/categories/new">
                <CategoryForm/>
            </Route>
        </main>
    </>
}
