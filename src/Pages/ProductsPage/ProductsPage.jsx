import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Product, TopLine, Spinner, TopBanner } from '../../Components'
import { EdamamContext } from '../../context/Context'

const ProductsPage = () => {  
    const { recipes, isLoading } = useContext(EdamamContext);  

    if(isLoading) {
        return (
            <Wrapper>
                <TopBanner>Our Products </TopBanner>  
                    <TopLine margin centered subtitle="Most Popular" title="Our Exclusive Cakes" />  
                <div className="products"> 
                    <Spinner /> 
                </div>
           </Wrapper>
        )
    } 

    return (
    <Wrapper>
        <TopBanner>Our Products </TopBanner>  
            <TopLine margin centered subtitle="Most Popular" title="Our Exclusive Cakes" />  
        <div className="products"> 
            {recipes.map(({recipe}) => {
                return <Product key={recipe.calories} recipe={recipe}/> 
            })}
        </div>
    </Wrapper>
)

    

}

export default ProductsPage


const Wrapper = styled.div`
    .products {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, 350px); 
        margin: 5rem 8rem;
        text-align: center; 
        justify-content: center; 
    } 
`