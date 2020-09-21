import React from 'react'

export default function Navbar() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h1 className="navbar-brand">Test app</h1>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="http://localhost:5000/dashboard">Profile <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://github.com/login/oauth/authorize?client_id=fda68db1e58ed91f0ce7">Repositories</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="https://github.com/login/oauth/authorize?client_id=fda68db1e58ed91f0ce7" tabIndex="-1">Events</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
    )
}
