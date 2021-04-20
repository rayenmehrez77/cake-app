import React from 'react'; 
import styled from 'styled-components';

const ErrorPage = () => {
    return (
        <Wrapper> 
            <h1>This page is not found </h1>
        </Wrapper>
    )
}

export default ErrorPage

const Wrapper  = styled.div`
    height: 100vh; 
    width: 100%;  
    background-color: var(--bg-primary);  
    display: grid; 
    place-items: center; 

`