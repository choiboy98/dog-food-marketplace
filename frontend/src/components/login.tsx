import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"

import React, { Component, useReducer, useState } from "react";
import { Link } from 'gatsby'

import TextField from '@mui/material/TextField';

const Login = ({ path }) => {
    const handleClick = () => {
        
    }

    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")

    const onSubmit = () => {
        handleLogin(username, password)
        navigate(`/app/profile`)
    }

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;    </span>
                <form onSubmit={handleClick}>
                    <TextField id="standard-basic" label="username" variant="standard" onChange={e => updateUsername(e.target.value)} />
                    <TextField id="standard-basic" label="password" variant="standard" onChange={e => updatePassword(e.target.value)} />
                    <input type="submit" value="Log In" onClick={onSubmit}/>
                </form>
            </div>
        </div>
    )
}

export default Login;