import React from 'react'
import styled from 'styled-components';
import { Logo } from "../../Components";
import { AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai"; 
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <Wrapper>
            <div className="cols">
                <div className="col1">
                    <Logo />
                    <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip.</p> 
                    <div className="social__media">
                        <AiFillLinkedin /> 
                        <AiFillFacebook /> 
                        <AiFillInstagram /> 
                        <AiFillTwitterCircle /> 
                    </div>
                </div>
                <div className="col2">
                    <h2>Quick Links</h2> 
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
                <div className="col3">
                    <h2>Cakes</h2> 
                    <ul>
                        <li>Blackforest</li>
                        <li>Bodhubon</li>
                        <li>ongdhonu</li>
                        <li>Meghrong</li>
                    </ul>
                </div>
                <div className="col4">
                    <h2>Contact Us</h2> 
                    <h4>Street Lorem ipsum 85</h4> 
                    <span>+216 92 183 047</span>
                </div>

            </div>
            <h5>Copyright ©2021 All rights reserved | Made with Love By <span>Rayen Mehrez</span></h5>
        </Wrapper>
    )
}

export default Footer


const Wrapper = styled.div`
    background-color: #FFF7F3; 
    .cols {
        margin: 0 auto; 
        min-height: 40vh; 
        padding: 4rem 6rem;
        display: grid; 
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  
        justify-items: center; 
        align-content: center; 
    }

    h5 {
        text-align: center;
        padding-bottom: 1.5rem; 
        color: var(--tertiary-color); 
        span {
            color: var(--primary-color); 
            font-size: 1rem;  
        }
    }

    .col1 {

        p {
            margin: 1.5rem 0; 
            line-height: 25px; 
            font-weight: 500;   
        }

        .social__media {
            width: 10rem; 
            display: flex; 
            justify-content: space-between; 

            & > * {
                font-size: 1.6rem; 
                transition: all 0.7s ease; 
                cursor: pointer;
                color: var(--primary-color); 
                &:hover {
                    transform: translateY(-8px) scale(1.1);
                }
            }
        }
    }

    .col1__logo {
        display: flex; 
    }
    .logo {
        width: 3rem; 
    }


    h2 {
        margin-bottom: 1rem; 
        color: var(--tertiary-color);
        font-weight: 400;
    }

    ul {
        list-style: none; 
        
        li {
            margin-bottom: 0.8rem;
            color: var(--tertiary-color);
        }
    }

    span {
        color: var(--primary-color); 
        font-size: 2rem; 
        font-weight: 500;
    }

    h4 {
        font-weight: 500; 
        margin: 1rem 0;
        color: var(--tertiary-color);
    }



`

const NavLink = styled(Link)`
    text-decoration: none; 
    color: var(--tertiary-color);
    font-weight: 400; 
`