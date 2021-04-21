import React from 'react'; 
import styled from 'styled-components';
import img from "../../images/404-error.svg"

const ErrorPage = () => {
    return (
        <Wrapper> 
            <img src={img} alt=""/>
            <h1>This page is not found </h1>
        </Wrapper>
    )
}

export default ErrorPage

const Wrapper  = styled.div`
    width: 100%;  
    height: 100vh; 
    background-color: var(--bg-primary);  
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    text-transform: capitalize; 
    h1 { letter-spacing: 2px; color: #4288B1  }

    img {
        width: 50rem; 
        height: 30rem; 
    }

`