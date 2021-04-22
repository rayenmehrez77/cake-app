import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as LogoImg } from "../../images/jelly.svg"; 

const Logo = () => {
    return (
        <Wrapper to="/">
            <LogoImg className="logo"></LogoImg>
            <h4>Cake</h4> 
        </Wrapper>
    )
}

export default Logo

const Wrapper = styled(Link)`
    display: flex; 
    text-decoration: none;
    align-items: center;
    
    .logo {
        width: 2.5rem; 
        height: 2.5rem; 
        object-fit: contain; 
        margin-right: 1rem;  
    } 

    h4 {
        font-size: 1.8rem; 
        color: var(--primary-color);
    }
`