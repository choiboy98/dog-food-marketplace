import React, { Component, useReducer, useState } from "react";
import { Link } from 'gatsby'

// import TextField from '@mui/material/TextField';
import { register } from '../utils/ApiWrapper';

const registerUser = async (username: string, password: string) => {
    const { type, response } = await register(username, password)
    console.log(type)
    console.log(response)
}

const LoginPopForm = ({ toggle }) => {
    const handleClick = () => {
        toggle();
    }

    const [username, updateUsername] = useState("")
    const [password, updatePassword] = useState("")

    return (
        <div className="modal">
            <div className="modal_content">
                <span className="close" onClick={handleClick}>&times;    </span>
                <form onSubmit={handleClick}>
                    <label>
                        username: 
                        <input type="text" value={username} onChange={e => updateUsername(e.target.value)} />
                    </label>
                    <div>
                        <label>
                            password: 
                            <input type="text" value={password} onChange={e => updatePassword(e.target.value)} />
                        </label>
                    </div>
                    <input type="submit" value="Log In" onClick={() => {registerUser(username, password)}}/>
                </form>
                {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                <Link to="/profile">Recipes</Link>
            </div>
        </div>
    )
}

export default LoginPopForm;