import React from 'react'
import styled from 'styled-components'; 
import { FaSearch } from "react-icons/fa"; 
import {CustomButton, AnimatedInput } from '../../Components'

const Search = () => {
    return (
        <Wrapper>
            <div className="input-container">
                <div className="search-container">
                    <AnimatedInput placeholder="Search for Keyword"/>
                    <div className="search-btn">
                        <FaSearch className="search-button"/>   
                    </div> 
                </div>
                <CustomButton search>Search</CustomButton>
            </div>
     </Wrapper>
    )
}

export default Search


const Wrapper = styled.div`
    background-color: #FBF9FF;


    .custom-button {
            display: block;
            text-align: center; 
            margin: 1.5rem 0; 
    }

    .search-container {
        display: flex; 
        align-items: center; 
    }

    .input-container {
        width: 100%; 
        padding: 3rem; 
        
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