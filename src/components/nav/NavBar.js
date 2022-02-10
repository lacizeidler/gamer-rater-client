import React from "react"
import { Link, useHistory } from "react-router-dom"
import { CategoryList } from "../category/CategoryList"
import "./NavBar.css"

export const NavBar = () => {
    const history = useHistory()
    return (
        <ul className="navbar">
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                <Link className="navbar_link" to = "/categories">
                    Categories
                </Link>
            </li>
            {
                (localStorage.getItem("gr_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("gr_token")
                                history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
