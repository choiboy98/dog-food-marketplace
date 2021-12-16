import * as React from 'react'
import { Link } from 'gatsby'
import LoginPopForm from './loginPopForm';

const Header = ({ shouldDisplayTabs }) => {
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
            {seen ? <LoginPopForm toggle={toggle} /> : ''}
            </div>
        </header>
    )
}

export default Header