import React from 'react'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone } from "react-icons/fa"; 
import CustomButton from '../CustomButton/CustomButton';


const Navbar = () => {
    return (
        <Wrapper> 
            <div className="navbar__left">
                <Link to="/"> 
                    <h1>Cake</h1>
                </Link>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div> 
            <div className="navbar__right">
                <p>
                    <FaPhone /> 
                    + 216 92 183 047
                </p>
                <CustomButton to="/products">Order Online </CustomButton>
                <CustomButton isSignIn to="/login">Sign In / Sign Up</CustomButton>
            </div>
        </Wrapper>
    )
}

export default Navbar


const Wrapper = styled.nav`
    height: 5rem; 
    width: 100%;  
    position: fixed; 
    top: 0; 
    left: 0; 
    box-shadow: 1px solid #000; 
    display: flex; 
    align-items:center; 
    justify-content: space-around;
    padding: 0 2rem; 
    background-color: #fff; 

    .navbar__left {
        display: flex; 
        align-items: center;  
        h1 {
            font-family: "Quicksand", sans-serif; 
            font-weight: 400; 
            color: var(--bg-button); 
        }
        a {
            text-decoration: none;
        }

        ul {
            display: flex; 
            align-items: center; 
            list-style: none; 
            margin-left: 2rem; 

            li {
                margin-right: 2rem; 
            }
        }
    }
    .navbar__right {
        display: flex; 
        align-items: center; 
        padding-right: 3rem; 

        .custom-button {
            margin: 0 0.6rem; 
        } 

        p {
            color: var(--bg-button); 
            font-weight: 600; 
            display: flex; 
            align-items: center;
        }
    }
`

const NavLink = styled(Link)`
    font-family: "Quicksand", sans-serif; 
    font-weight: 500; 
    color: var(--navLink-color); 
    font-size: 1.2rem;       
`