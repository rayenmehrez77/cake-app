import React from 'react'
import {Banner, Features, PopularCake, Story} from '../../Components'
import Pictures from '../../Components/Pictures/Pictures'
import Testimonials from '../../Components/Testimonials/Testimonials'; 

const HomePage = () => { 
  
    return (
        <main>
            <Banner />
            <PopularCake /> 
            <Story /> 
            <Features/> 
            <Testimonials /> 
            <Pictures />
        </main>
    )
}

export default HomePage
