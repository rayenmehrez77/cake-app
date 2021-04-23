import React from 'react'; 
import styled, { keyframes } from 'styled-components';
import img from "../../images/services-shape.png"

const TopBanner = ({ children }) => {
    return (
        <Wrapper>
            <h1>{children}</h1>
            <img src={img} alt="cake"/>
        </Wrapper>
    )
}

export default TopBanner


const translation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(20px); 
  } 
`;

const Wrapper = styled.div`
    height: 40vh;
    background-color: var(--bg-primary);
    margin: 5rem 0;
    position: relative; 
    img {
        width: 25rem; 
        position: absolute; 
        bottom: 2rem; 
        right: 0.2rem; 
        animation: ${translation} 2s infinite ease-in;
    }; 

    h1 {
        text-align: center; 
        padding: 6rem 0;
        font-size: 5rem;        
        font-family: "Lobster", sans-serif; 
        font-weight: 400;  
        letter-spacing: 3px; 
        color: #1f1f1f; 
    }
`