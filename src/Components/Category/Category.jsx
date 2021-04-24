import React from 'react'
import styled from 'styled-components'

const Category = () => {
    return (
        <Wrapper>
            <h3>Category</h3> 
            <ul>
                <li>Restaurant food (37)</li>
                <li>Travel news(37)</li>
                <li>Modern technology</li>
                <li>Product (10)</li>
                <li>Inspiration(21)</li>
                <li>Health Care (21)</li>
            </ul>
        </Wrapper>
    )
}

export default Category; 


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

    ul {
        list-style: none; 

        li {
            margin: 1.5rem 0; 
            border-bottom: 1px solid #e9e9e9;
            padding-bottom: 1rem;
            font-weight: 500; 
            color: #363636; 
            cursor: pointer;

            :hover {
                color: var(--primary-color); 
            }
        }
    }
`