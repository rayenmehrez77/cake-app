import React from 'react'
import styled from 'styled-components'; 
import img from "../../images/recentPost.png"
import {NewPost} from '../../Components';

const RecentPost = () => {
    return (
        <Wrapper>
            <h3>Recent Post</h3>
            <NewPost title="From life was you fish..." date="January 12, 2019" img={img} /> 
            <NewPost title="From life was you fish..." date="January 12, 2019" img={img} /> 
            <NewPost title="From life was you fish..." date="January 12, 2019" img={img} /> 
            <NewPost title="From life was you fish..." date="January 12, 2019" img={img} /> 
        </Wrapper>
    )
}

export default RecentPost


const Wrapper = styled.div`
    padding: 2rem 3rem; 
    background-color: #FBF9FF;
    margin: 2rem 0; 
    h3 {
        border-bottom: 1px solid #e9e9e9;
        padding-bottom: 1rem;
        margin-bottom: 3rem; 
        font-weight: 500; 
        font-family: "Quicksand", sans-serif; 
        color: #6e6e6e; 
    }
`