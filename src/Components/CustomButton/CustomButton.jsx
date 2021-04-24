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
    padding: ${({ search }) => search ? "0.8rem 1.3rem" : " 0.5rem 1.3rem" }; 
    border-radius: ${({ search }) => search ? "2px" : "8rem" };  
    background-color: ${props => props.isSignIn | props.search  ?  "#fff" : "var(--primary-color)" };  
    color: ${props => props.isSignIn | props.search ? "var(--primary-color)" : "#fff"}; 
    border:  ${props => props.isSignIn | props.search ? "1px solid var(--primary-color)" : "none"};
    cursor: pointer;
    font-family: "Quicksand", sans-serif; 
    font-weight: 400; 
    box-shadow: ${({shadow}) => shadow ? "2px 5px 15px #e4bc8f": "none"}; 
    letter-spacing: ${({ search }) => search ? "2px" : "0" };  

    :hover {
        background-color: ${props => props.search  ?  "var(--primary-color)" : "#fff" };  
        color: ${props => props.search ? "#fff" : "var(--primary-color)"}; 
        border:  ${props => props.search ? "none" : "1px solid var(--primary-color)"};
    }

`