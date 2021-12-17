import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const [currIngredient, updateIngredient] = React.useState("");
    const [currQuantity, updateQuantity] = React.useState(0);
    const [currUnit, updateUnit] = React.useState("");
    const [ingredients, updateIngredients] = React.useState([])
    const [description, updateDescription] = React.useState("")

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
        
    const addIngredients = () => {
        if (currIngredient !== "" && currQuantity > 0 && currUnit !== "") {
            let currRecipeIngredient : RecipeIngredient = {
                ingredient: currIngredient,
                quantity: currQuantity,
                unit: currUnit
            }
            updateIngredients([...ingredients, {
                currRecipeIngredient
            }])
            console.log("yay")
            ingredients.map((i, index) => {
                console.log(i["currRecipeIngredient"])
            })
        } else {
            console.log("nay")
        }

    }

    const addRecipe = () => {
        // TODO: Implement this
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
                    <MenuItem value={10}>oz</MenuItem>
                    <MenuItem value={20}>g</MenuItem>
                    <MenuItem value={30}>ml</MenuItem>
                    <MenuItem value={30}>cup</MenuItem>
                    <MenuItem value={30}>tbsp</MenuItem>
                </Select>
                <Button variant="contained" onClick={addIngredients}>Add</Button>
                {
                    ingredients.map((i) => {
                        return(
                            <div>
                                <h2>{i["currRecipeIngredient"].ingredient}</h2>
                                <h2>{i["currRecipeIngredient"].quantity}</h2>
                                <h2>{i["currRecipeIngredient"].unit}</h2>
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
                <Button variant="contained" onClick={addRecipe}>Add</Button>
            </Box>
        </Modal>
        </div>
    );
  }

const RecipeHeader = () => {
    const doNothing = () => {

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
            <BasicModal />
        </div>
    )
}

export default RecipeHeader;