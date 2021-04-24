import React from 'react'
import styled from 'styled-components'
import { TopBanner, Post, Search, Category, RecentPost} from '../../Components';

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
                     <Search />
                     <Category /> 
                     <RecentPost /> 
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
        margin: 7rem; 
    }  

    .posts {
        flex: 0.6; 
    }

    .sidebar {
        flex: 0.4; 
        margin-left: 2rem; 
    } 

`
