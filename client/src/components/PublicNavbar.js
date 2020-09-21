import React from 'react'
import { Link } from "react-router-dom";

export default function PublicNavbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Test app</h1>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/register" className="nav-link"> Register </Link>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Link to="/login" className="nav-link"> Login </Link>
                    </span>
                </div>
            </nav>
    )
}
