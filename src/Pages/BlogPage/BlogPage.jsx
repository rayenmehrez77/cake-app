import React from 'react'
import styled from 'styled-components'
import { TopBanner, Post } from '../../Components';
import { FaSearch } from "react-icons/fa"; 
import { AnimatedInput } from '../../Components/AnimatedInput/AnimatedInput';

const BlogPage = () => {
    return (
        <Wrapper>
            <TopBanner>Blog</TopBanner>
            <div className="blog-container">
                 <div className="posts">
                     <Post/> 
                     <Post/> 
                 </div>
                 <div className="sidebar">
                     <Search>
                        <div className="input">
                            <AnimatedInput placeholder="Search for Keyword"/>
                            <div className="search-btn">
                                <FaSearch className="search-button"/>   
                            </div>
                        </div>
                     </Search>
                 </div>
            </div>
        </Wrapper>
    )
}

export default BlogPage


const Wrapper = styled.div`
    min-height: 100vh; 

    .blog-container {
        display: flex; 
        margin: 6rem; 
    }  

    .posts {
        flex: 0.6; 
    }

    .sidebar {
        flex: 0.4; 
        margin-left: 2rem; 
    } 

    .input {
        width: 80%; 
        padding: 3rem; 
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        
        .search-btn {
            cursor: pointer;
            background-color: var(--primary-color); 
            padding: 0.7rem 0.8rem; 
            color: #fff;
            border-top-right-radius: 3px;  
            border-bottom-right-radius: 3px; 
        }
        
    }
    `

const Search = styled.div`
    background-color: #FBF9FF;
`