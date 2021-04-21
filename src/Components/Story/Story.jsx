import React from 'react'
import styled, { keyframes } from 'styled-components'
import img from "../../images/story.png"
import {CustomButton, TopLine} from '../../Components'; 
import serviceShape from "../../images/services-shape.png";

const Story = () => {
    return (
        <Wrapper>
             <img src={img} alt="cake"/>
             <div className="content">
                 <TopLine subtitle="Fresh & Delicious" title="A Simple Way to Eating Delicious" />  
                 <p>Land behold it created good saw after she'd Our set living. Signs midst dominion creepeth morning laboris nisi ufsit aliquip ex ea commodo conse quat is aute irure, quis nostrud exer.</p>
                 <CustomButton shadow>Our Story</CustomButton>
             </div> 
             <img src={serviceShape} alt="services Shape" className="services-shape"/>
        </Wrapper>
    )
}

export default Story;


const translation = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(30px); 
  } 
`;

const Wrapper = styled.div`
    display: flex; 
    align-items: center;
    flex-wrap: wrap; 
    justify-content: center;  
    margin-bottom: 4rem; 
    position: relative;

    .content {
        margin-left: 6rem; 
        width: 40rem;  

        p {
            margin-bottom: 1.4rem; 
            font-family: "DM Sans", sans-serif; 
            font-weight: 400; 
        }
    } 

    .services-shape {
        position: absolute; 
        bottom: -30px; 
        right: 5px; 
        animation: ${translation} 2s infinite ease-in;
    }

`