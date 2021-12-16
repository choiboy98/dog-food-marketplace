import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"

import React, { Component, useReducer, useState } from "react";
import { Link } from 'gatsby'

// import TextField from '@mui/material/TextField';
import { register } from '../utils/ApiWrapper';
import Ingredients from "./ingredients";

const CreateRecipe = () => {
    const handleClick = () => {
        
    }

    const [title, updateTitle] = useState("")
    const [description, updateDescription] = useState("")
    const [ingredient, updateIngredients] = useState([])

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;    </span>
                <Ingredients tags={[]}/>
            </div>
        </div>
    )
}

export default CreateRecipe;