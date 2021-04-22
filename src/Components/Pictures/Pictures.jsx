import React from 'react'; 
import styled, { keyframes } from 'styled-components';
import cake1 from "../../images/cake1.jpg"
import cake2 from "../../images/cake2.jpg"
import cake3 from "../../images/cake3.jpg"
import cake4 from "../../images/cake4.jpg"
import cake5 from "../../images/cake5.jpg"

const Pictures = () => {
    return (
        <Wrapper>
            <div className="images">
                <img src={cake2} alt="cake"/>
                <img src={cake3} alt="cake"/>
                <img src={cake4} alt="cake"/>
                <img src={cake5} alt="cake"/> 
                <img src={cake5} alt="cake"/> 
            </div>
        </Wrapper>
    )
}

export default Pictures



const Wrapper = styled.div`
    position: relative;
    
    .images {
        display: flex; 
        overflow-x: scroll;
    }

    .images::-webkit-scrollbar {
        display: none;
    }

    .images img {
        cursor: pointer;
        width: 400px;
        height: 350px;
        object-fit: cover; 

    } 
    
    .hover__img {
        width: 5rem; 
        height: 5rem; 
        background-color: #fff;
        position: absolute; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%);   
    }
`
