import React from 'react'
import styled from 'styled-components'

const Testimonial = ({ name, job, description, img}) => {
    return (
        <Wrapper>
            <p>{description}</p> 
            <div className="content">
                <img src={img} alt="person"/> 
                <div className="content__right">
                    <h4>{name}</h4>  
                    <span>{job}</span>
                </div>
            </div>
        </Wrapper>
    )
}

export default Testimonial


const Wrapper = styled.div`
    width: 500px;  
    margin: 3rem; 
    border-radius: 10px; 
    transition: all 0.6s ease; 
    border-bottom-right-radius: 8rem;
    padding: 2.5rem 2rem; 
    cursor: pointer;
    :hover {
        box-shadow: 2px 3px 20px #f5e2cc; 

    }

    p {
        font-family: "DM Sans", sans-serif; 
        line-height: 25px; 
        font-size: 18px; 
        font-weight: 400; 
    }


    .content {
        display: flex; 
        align-items: center; 
        margin: 1rem 0; 
        
        img {
            width: 5rem; 
            height: 5rem; 
            border-radius: 100%; 
            object-fit: contain; 
            margin-right: 1rem; 
        }

        .content__right {
            h4 {
                margin-bottom: 8px; 
                color:  var(--primary-color); 
            }
        
            span {
                font-family: "DM Sans", sans-serif; 
                font-weight: 400; 
                color: var(--tertiary-color);
                font-size: 0.8rem; 
            }
        } 
    }
`

        
        