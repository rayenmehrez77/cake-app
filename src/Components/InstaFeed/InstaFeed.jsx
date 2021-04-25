import React from 'react'
import styled from 'styled-components';
import cake2 from "../../images/cake2.jpg"
import cake3 from "../../images/cake3.jpg"
import cake4 from "../../images/cake4.jpg"
import cake5 from "../../images/cake5.jpg"

const InstaFeed = () => {
    return (
        <Wrapper>
            <h3>Instagram Feed</h3> 
            <ul>
                <img src={cake2} alt="cake"/>
                <img src={cake3} alt="cake"/>
                <img src={cake4} alt="cake"/>
                <img src={cake5} alt="cake"/> 
                <img src={cake5} alt="cake"/> 
                <img src={cake5} alt="cake"/> 
            </ul>
        </Wrapper>
    )
}

export default InstaFeed


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
        display: flex; 
        flex-wrap: wrap; 
    }

    ul > img {
        width: 6rem; 
        height: 5rem; 
        object-fit: cover; 
        margin: 0.3rem; 
        cursor: pointer;
    }
`