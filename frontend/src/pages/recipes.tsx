import * as React from 'react'
import { Link } from 'gatsby'

const Recipes = ({ shouldDisplayTabs }) => {
    const [seen, toggle] = React.useState(false)

    return (
        <header>
            <div className="container">
                <div className="inner-header">
                    <div className="logo">
                        <Link to="/">RUFF MARKET</Link>
                    </div>
                    {
                        shouldDisplayTabs === "true" ? 
                        <div className="navigation">
                            <nav>
                                <Link to="/recipes">Recipes</Link>
                                <button onClick={() => toggle(!seen)}>Log In</button>
                            </nav>
                        </div> : ''
                    }
                </div>
            </div>
        </header>
    )
}

export default Recipes