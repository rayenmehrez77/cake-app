import React from 'react'
import styled from 'styled-components'
import {Product, TopLine} from '../../Components'

const PopularCake = () => {
    return (
        <Wrapper>
             <TopLine margin centered subtitle="Most Popular" title="Our Exclusive Cakes" />  
             <div className="popular__list">
                 <Product /> 
                 <Product /> 
                 <Product /> 
             </div>
        </Wrapper>
    )
}

export default PopularCake


const Wrapper = styled.div`
    min-height: 40vh;
    margin-bottom: 4rem; 

    .popular__list {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
        grid-template-rows: repeat(auto-fill, minmax(1fr, 600px)); 
        margin: 0 8rem;
        grid-gap: 2rem; 
        text-align: center; 
    }

`