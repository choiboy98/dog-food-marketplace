import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { isLoggedIn, logout } from "../utils/auth"

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-header">
                    <div className="logo">
                        <Link to="/">RUFF MARKET</Link>
                    </div>
                        <div className="navigation">
                            <nav>
                                <Link to="/recipes">Recipes</Link>
                                {isLoggedIn() ? (
                                        <a
                                            href="/"
                                            onClick={event => {
                                            event.preventDefault()
                                            logout(() => navigate(`/app/login`))
                                            }}
                                        >
                                            Logout
                                    </a>
                                ) : <Link to="/app/login">log in</Link>}
                            </nav>
                        </div>
                </div>                
            </div>
        </header>
    )
}

export default Header