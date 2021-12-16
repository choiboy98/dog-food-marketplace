import * as React from 'react'

const RecipeHeader = () => {
    return (
        <div className="recipe-header">
            <form action="/" method="get">
                <label htmlFor="header-search">
                    <span className="visually-hidden">Search blog posts</span>
                </label>
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search blog posts"
                    name="s" 
                />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default RecipeHeader;