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
    padding: ${({ search, isgoogle, isfacebook }) => search | isgoogle | isfacebook ? "0.8rem 60px 0.8rem 10px" : " 0.5rem 1.3rem" }; 
    border-radius: ${({ search, isgoogle, isfacebook }) => search | isgoogle | isfacebook ? "5px" : "8rem" };  
    background-color: ${props => props.isSignIn | props.search | props.isgoogle  ?  "#fff" : "var(--primary-color)" };  
    background-color: ${({ isfacebook }) => isfacebook ? "#1f8af5" : ""}; 
    color: ${props => props.isSignIn | props.search ? "var(--primary-color)" : "#ffffff"}; 
    border:  ${props => props.isSignIn | props.search ? "1px solid var(--primary-color)" : "none"};
    cursor: pointer;
    font-family: "Quicksand", sans-serif; 
    font-weight: 400; 
    box-shadow: ${({shadow}) => shadow ? "2px 5px 15px #e4bc8f": "none"}; 
    letter-spacing: ${({ search }) => search ? "2px" : "0" };  
    box-shadow: ${({ isgoogle }) => isgoogle ? "3px 1px 75px rgba(0, 0, 0, 0.158)" : ""}; 
    color: ${({ isgoogle }) => isgoogle ? "#959595" : "#fff"} ; 
    :hover {
        background-color: ${props => props.search  ?  "var(--primary-color)" : "#fff" };  
        color: ${props => props.search ? "#fff" : "var(--primary-color)"}; 
        border:  ${props => props.search ? "none" : "1px solid var(--primary-color)"};
    }

`