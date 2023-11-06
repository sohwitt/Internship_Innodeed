import React from "react"
import "../styles/login.css"
import { useDispatch } from "react-redux"
import { authActions } from "../features/authSlice";
import { Box } from "@mui/material";


const Login = () => {
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(authActions.login())
  }
  return (
    
      <Box>
        <Box>   
            
          <form onSubmit={handleSubmit}>
            <span>Username or Email address</span>
            <input type='text' required />
            <span>Password * </span>
            <input type='password' required />
            <button className='button'>Log in </button>
          </form>
        </Box>
      </Box>
    
  )
}

export default Login;