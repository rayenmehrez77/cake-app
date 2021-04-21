import React from 'react'
import styled from 'styled-components'

const TopLine = ({...props}) => {
    return (
        <Wrapper {...props}>
            <span>{props.subtitle}</span> 
            <h1>{props.title}</h1>
        </Wrapper>
    )
}

export default TopLine


const Wrapper = styled.div`
    margin: ${({ margin }) => margin ? "3rem 0" : "1.5rem 0"}; 
    text-align: ${({centered}) => centered ? "center" : "none"};
    text-transform: capitalize; 

    span {
        letter-spacing: 2px; 
        color: var(--primary-color); 
        font-weight: 500; 
    } 
    
    h1 {
        font-family: "Quicksand", sans-serif; 
        font-weight: 700; 
        font-size: 2.5rem; 
        margin-top: 1.5rem; 
    }
`