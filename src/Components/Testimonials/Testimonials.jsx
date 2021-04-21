import React from 'react'
import styled from 'styled-components'
import { Testimonial, TopLine } from '../../Components'; 
import img from "../../images/rayen.png"

const Testimonials = () => {
    return (
        <Wrapper>
                <TopLine title="What Customers Say" subtitle="Testimonials" centered margin/> 
                <div className="testimonials">
                    <Testimonial description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur vitae quos voluptatum voluptas, tenetur voluptate odit suscipit maiores quis, consequatur nostrum aperiam, velit iure accusantium hic veniam amet assumenda reprehenderit!" name="Rayen Mehrez" job="Front end web developer" img={img} /> 
                    <Testimonial description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur vitae quos voluptatum voluptas, tenetur voluptate odit suscipit maiores quis, consequatur nostrum aperiam, velit iure accusantium hic veniam amet assumenda reprehenderit!" name="Rayen Mehrez" job="Front end web developer" img={img} /> 
                </div> 
        </Wrapper>
    )
}

export default Testimonials 



const Wrapper = styled.div`
    min-height: 50vh; 
    padding-bottom: 8rem;  
    
    .testimonials {
        display: flex;  
        justify-content: center; 
    }
`