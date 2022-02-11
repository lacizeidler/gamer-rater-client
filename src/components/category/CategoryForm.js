import { useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { createCategory } from "./CategoryManager"

export const CategoryForm = () => {
    const history = useHistory()
    const [newCategory, setNewCategory] = useState({
        label: ""
    })

    const changeCategoryState = (domEvent) => {
        const copy = {...newCategory}
        const key = domEvent.target.name
        const value = domEvent.target.value
        copy[key] = value
        setNewCategory(copy)
    }

    return (
        <>
        <form>
            <h2>
                Create New Category
            </h2>
            <fieldset>
                <div>
                    <label>Label</label>
                        <input
                        type="text"
                        name="label"
                        required autoFocus
                        className="form_control"
                        value={newCategory.label}
                        onChange={changeCategoryState}
                        />
                </div>
            </fieldset>
            <button
            type="submit"
            onClick={
                (evt) => {
                    evt.preventDefault()

                    const category = {
                        label: newCategory.label
                    }

                    createCategory(category)
                    .then(() => history.push("/categories"))
                }
            }
            >
                Create
            </button>
        </form>
        </>
    )
}