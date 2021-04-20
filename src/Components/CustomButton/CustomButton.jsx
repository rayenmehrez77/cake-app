import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CustomButton = ({ children, ...props}) => {
    return (
        <NavLink className="custom-button" {...props}>
             {children}
        </NavLink>
    )
}

export default CustomButton

const NavLink = styled(Link)`
    text-decoration: none;
    padding: 0.5rem 1.3rem; 
    border-radius: 8rem;  
    background-color: ${props => props.isSignIn ? "#fff" : "var(--bg-button)" };  
    color: ${props => props.isSignIn ? "var(--bg-button)" : "#fff"}; 
    border:  ${props => props.isSignIn ? "1px solid var(--bg-button)" : "none"};
    cursor: pointer;
    font-family: "Quicksand", sans-serif; 
    font-weight: 400;
`