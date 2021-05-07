import React, { useContext, useState } from 'react'; 
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaPhone } from "react-icons/fa"; 
import {CustomButton, Logo} from '../../Components'; 
import { EdamamContext } from '../../context/Context'
import { auth } from '../../firebase/firebase.utils';


const Navbar = () => { 
    const { user } = useContext(EdamamContext);   
    return (
        <Wrapper> 
            <div className="navbar__left">
                <Logo /> 
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
                    { user ? (
                        <div className="user">
                            <CustomButton onClick={() => auth.signOut()}>Sign Out</CustomButton>
                            <img src={user.photoURL} alt="photo" /> 
                        </div> 
                    ) : ""} 
            </div>
        </Wrapper>
    )
}

export default Navbar


const Wrapper = styled.nav`
    z-index: 999; 
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
            font-weight: 600; 
            color: var(--primary-color); 
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
            color: var(--primary-color); 
            font-weight: 600; 
            display: flex; 
            align-items: center;
        }
    } 

    .user {
        display: flex; 
        align-items: center; 

        img {
            width: 45px; 
            height: 45px; 
            object-fit: cover; 
            cursor: pointer;
            border-radius: 100%; 

            :hover {
                .modal {
                    position: absolute;
                    top: 69px;
                    right: 98px;
                    width: 126px;
                    height: 35px;
                    text-align: center;
                    padding: 8px;
                    border-radius: 5px;
                    color: #fff;
                    background-color: #e14106;
                    font-weight: bold;
                }
            }
        }
    }
`

const NavLink = styled(Link)`
    font-family: "Quicksand", sans-serif; 
    font-weight: 500; 
    color: var(--tertiary-color); 
    font-size: 1.2rem;       
`
