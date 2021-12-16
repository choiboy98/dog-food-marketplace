import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "./auth"

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }
  return <Component {...rest} />
}

export default PrivateRoute