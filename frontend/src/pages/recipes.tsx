import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout';
import CreateRecipe from '../components/createRecipe';
import RecipeHeader from '../components/recipeHeader';

const Recipes = () => {

    return (
        <Layout>
            <RecipeHeader />
            {/* <CreateRecipe /> */}
        </Layout>
    )
}

export default Recipes