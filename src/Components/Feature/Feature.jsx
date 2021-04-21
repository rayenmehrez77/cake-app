import React from 'react'
import styled from 'styled-components'

const Feature = ({ Icon, title, description}) => {
    return (
        <Wrapper>
            <Icon className="icon" /> 
            <div className="content">
                <h3>{title}</h3> 
                <p>{description}</p>
            </div>
        </Wrapper>
    )
}

export default Feature


const Wrapper = styled.div`
    text-align: center; 
    cursor: pointer;
    padding: 4.5rem 0;
    border-radius: 15px;  
    transition: all 0.6s ease; 
    width: 25rem; 
    margin: 2rem; 
    
    .content {
        padding: 0 1rem; 
        
        h3 {
            color: #001F38; 
            font-family: "Losbor", sans-serif;  
            font-weight: 500; 
            margin: 1rem 0;
        }

        p {
            line-height: 20px; 
        }
    }

    :hover {
        background-color: #fff; 
        box-shadow: 3px 3px 30px #ecebeb; 
        
        .icon {
            box-shadow: 3px 3px 25px #f1e6db; 
            border-radius: 100%; 
        } 
        .content > h3 {
            color: var(--bg-button);
        }
    }

`