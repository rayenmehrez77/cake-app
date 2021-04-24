import React from 'react'
import styled from 'styled-components'

const NewPost = ({ date, img, title}) => {
    return (
        <Wrapper>
            <img src={img} alt="post 1 "/> 
            <div className="content">
                <h4>{title}</h4> 
                <span>{date}</span>
            </div>
        </Wrapper>
    )
}

export default NewPost


const Wrapper = styled.div`
    display: flex; 
    margin-bottom: 1.5rem; 
    img {
        margin-right: 1rem; 
    }

`