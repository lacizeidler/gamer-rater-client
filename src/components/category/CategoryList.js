import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getCategories } from "./CategoryManager.js"

export const CategoryList = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory()
    
    useEffect(
        () => {
            getCategories()
            .then(cat => setCategories(cat))
        },[]
    )

    return (
        <>
        <button
        onClick={
            () => {
                history.push("/categories/new")
            }
        }>
            New Category
        </button>

            <article>
                {
                    categories.map(
                        (category) => {
                            return <section key={`category__${category.id}`}>
                                <p>{category.label}</p>
                            </section>
                        }
                    )
                }
            </article>
        </>
    )

}