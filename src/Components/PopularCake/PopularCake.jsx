import React, { useContext } from 'react'
import styled from 'styled-components'
import {Product, TopLine} from '../../Components'
import { EdamamContext } from '../../context/Context'

const PopularCake = () => { 
    const { recipes }  = useContext(EdamamContext); 

    return (
        <Wrapper>
             <TopLine margin centered subtitle="Most Popular" title="Our Exclusive Cakes" />  
             <div className="popular__list"> 
              {recipes.filter((recipe, idx) => idx < 3).map(({ recipe }) => {
                  return <Product key={recipe.calories} recipe={recipe} />  
              })}
             </div>
        </Wrapper>
    )
}

export default PopularCake


const Wrapper = styled.div`
    min-height: 40vh;
    margin-bottom: 4rem; 

    .popular__list {
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-wrap: wrap; 
    }

`

{/* <Product key={recipe.calories} recipe={recipe}/>   */}