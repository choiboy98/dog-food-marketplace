import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Ingredients from './ingredients';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

interface RecipeIngredient {
    ingredient: string,
    quantity: number,
    unit: string
}

const BasicModal = ({ addRecipeCard }) => {
    const [open, setOpen] = React.useState(false);
    
    const [currIngredient, updateIngredient] = React.useState("");
    const [currQuantity, updateQuantity] = React.useState(0);
    const [currUnit, updateUnit] = React.useState("");
    
    const [ingredients, updateIngredients] = React.useState([])
    const [description, updateDescription] = React.useState("")
    const [error, updateError] = React.useState("")
    const [name, updateName] = React.useState("")

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    const addIngredients = () => {
        if (currIngredient !== "" && currQuantity > 0 && currUnit !== "") {
            console.log(ingredients)
            let ingredientBlock : RecipeIngredient = {
                ingredient: currIngredient,
                quantity: currQuantity,
                unit: currUnit
            }
            updateIngredients([...ingredients, {
                currIngredient, currQuantity, currUnit
            }])
        } else {
            console.log("nay")
            updateError("please specify ingredient, quantity, or unit")
        }

    }

    const addRecipe = () => {
        // TODO: Implement this
        ingredients.forEach(function(value, key) {
            let test = value as RecipeIngredient
            console.log(key + ' = ' + test)
        })
        console.log("ingredient " + ingredients)
        addRecipeCard(name, ingredients, description)
    }

    return (
        <div>
        <Button onClick={handleOpen}>Make Recipe</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField id="standard-basic" label="name" variant="standard" onChange={e => updateName(e.target.value)}/>
                <TextField id="standard-basic" label="ingredient" variant="standard" onChange={e => updateIngredient(e.target.value)}/>
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => updateQuantity(e.target.value)}
                />
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currUnit}
                    label="unit"
                    onChange={e => updateUnit(e.target.value)}
                >
                    <MenuItem value={"oz"}>oz</MenuItem>
                    <MenuItem value={"g"}>g</MenuItem>
                    <MenuItem value={"ml"}>ml</MenuItem>
                    <MenuItem value={"cup"}>cup</MenuItem>
                    <MenuItem value={"tbsp"}>tbsp</MenuItem>
                </Select>
                <Button variant="contained" onClick={addIngredients}>Add Ingredients</Button>
                {
                    ingredients.map((ingredient) => {
                        // let addedIngredient = ingredient["ingredientBlock"]
                        return(
                            <div>
                                <h2>{ingredient.ingredient}</h2>
                                <h2>{ingredient.quantity}</h2>
                                <h2>{ingredient.unit}</h2>
                            </div>
                        )
                    })
                }
                <TextField
                    id="fullWidth"
                    label="Description"
                    type="fullWidth"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={e => updateDescription(e.target.value)}
                />
                <Button variant="contained" onClick={addRecipe}>Add Recipe</Button>
                {
                    error !== "" ? 
                        <h2>{error}</h2>
                    : ""
                } 
            </Box>
        </Modal>
        </div>
    );
  }

const card = (name, ingredients, description) => (
    <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {name}
        </Typography>
        {
            ingredients.map((ingredient) => {
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {ingredient.ingredient + " " + ingredient.quantity + " " + ingredient.unit}
                </Typography>
            })
        }
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
        </Typography>
    </CardContent>
)

const RecipeHeader = () => {
    const [shouldAddRecipe, updateShouldAddRecipe] = React.useState(false)
    const [recipes, updateRecipes] = React.useState([])

    const addRecipeCard = (name, ingredients, description) => {
        console.log("here " + name)
        
        updateRecipes([...recipes, {
            name, ingredients, description
        }])
        updateShouldAddRecipe(true);
    }

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
            <BasicModal addRecipeCard={addRecipeCard} />
            {
                recipes.map((recipe) => {
                    console.log("outer ingredients " + recipe.ingredients)
                    return(
                     <Card variant="outlined">{card(recipe.name, recipe.ingredients, recipe.description)}</Card>
                    )
                })
            }

        </div>
    )
}

export default RecipeHeader;