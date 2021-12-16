import { register } from '../utils/ApiWrapper';

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

const setUser = user => window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

const registerUser = async (username: string, password: string) => {
    const { type, response } = await register(username, password)
    console.log(type)
    console.log(response)
}

export const handleLogin = ( username, password ) => {
    registerUser(username, password)
    
    return setUser({
        username: username,
        name: username,
        email: "johnny@example.org",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    })
}

export const isLoggedIn = () => {
    const user = getUser()
    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}