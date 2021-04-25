import React, { useContext } from 'react'
import styled from 'styled-components'
import { Product, TopLine } from '../../Components'
import TopBanner from '../../Components/TopBanner/TopBanner'
import { EdamamContext } from '../../context/Context'

const ProductsPage = () => { 
    const { recipes } = useContext(EdamamContext);  

    return (
        <Wrapper>
            <TopBanner>Our Products </TopBanner>  
                <TopLine margin centered subtitle="Most Popular" title="Our Exclusive Cakes" />  
            <div className="products">
                {recipes.map((recipe) => {
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
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); 
        grid-template-rows: repeat(auto-fill, minmax(1fr, 600px)); 
        margin: 5rem 8rem;
        grid-gap: 2rem; 
        text-align: center; 
    } 
`