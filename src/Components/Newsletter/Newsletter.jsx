import React from 'react'; 
import styled from 'styled-components'; 
import { CustomButton } from "../../Components"

const Newsletter = () => {
    return (
        <Wrapper>
            <h3>Newsletter</h3> 
            <form>
                <input type="text" placeholder="Enter Email" required />  
                <CustomButton search>Subscribe</CustomButton>
            </form>

        </Wrapper>
    )
}

export default Newsletter


const Wrapper = styled.div`
    padding: 2rem 3rem; 
    background-color: #FBF9FF;
    margin: 2rem 0; 
    h3 {
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 1rem;
        margin-bottom: 3rem; 
        font-weight: 500; 
        font-family: "Quicksand", sans-serif; 
        color: #6e6e6e; 
    } 
    form {
        display: flex; 
        flex-direction: column; 

        input { 
            padding: 1rem 0.5rem;
            outline: none; 
            margin-bottom: 0.6rem; 
            border: 1px solid #f3eefc;  
            font-weight: 500; 
        }

        .custom-button {
            text-align: center; 
        }
    }
`