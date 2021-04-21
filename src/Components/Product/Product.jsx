import React from 'react'
import styled from 'styled-components'
import CustomButton from "../CustomButton/CustomButton"; 
import logo from "../../images/jelly.svg";


const Product = () => {
    return (
        <Wrapper>
            <img src={logo} alt="logo" />
            <div className="content">
                <h4>Chocolate</h4> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
             </div>
             <CustomButton to="/products" shadow>$20 | Order Now </CustomButton>
        </Wrapper>
    )
}

export default Product

const Wrapper = styled.div`
    background-color: var(--secondary-color); 
    padding: 4rem 0; 
    border-radius: 10px;
    border-bottom-right-radius: 5rem; 

    img {
        width: 3rem; 
    } 

    p {
        width: 18rem; 
        text-align: center; 
        margin-bottom: 1.5rem; 
        font-family: "DM Sans", sans-serif; 
        font-weight: 500; 
    } 

    h4 {
        font-family: "Quicksand", sans-serif; 
        font-weight: 700; 
    }
`
