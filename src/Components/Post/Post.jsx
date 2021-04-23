import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components' ; 
import blogImg from "../../images/Blog-img.png"; 
import { BsPersonFill } from "react-icons/bs"; 
import { FaComments } from "react-icons/fa"; 

const Post = () => {
    return (
        <Wrapper>
                <img src={blogImg} alt="post img"/>
                <div className="post-container">
                    <div className="date">
                        <h1>15</h1> 
                        <h2>Jan</h2>
                    </div> 
                    <div className="content">
                        <Link to="/products">Google inks pact for new 35-storey office</Link> 
                        <p>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p> 
                        <div className="types">
                            <div className="categorie">
                                <BsPersonFill /> 
                                <span>Travel, Lifestyle</span>    
                            </div> 
                            <div className="comments">
                                <FaComments /> 
                                <span>03 Comments</span> 
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}

export default Post


const Wrapper = styled.div`

    .post-container {
        padding: 1rem; 
        position: relative; 


    .date {
        background-color: var(--primary-color); 
        width: 7rem; 
        height: 6rem; 
        padding: 1rem;  
        border-radius: 6px;  
        display: flex; 
        flex-direction: column; 
        align-items: center; 
        color: #fff;
        font-family: "Quicksand", sans-serif; 
        font-weight: 600; 
        position: absolute; 
        bottom: 11rem;  
        left: 3rem; 
     }
  }

  .content {

      a {
          font-size: 2rem; 
          padding-top: 4rem; 
          text-decoration: none; 
          font-weight: 500; 
          color: #1d1d1d; 
          font-weight: 600; 
          font-family: "Quicksand", sans-serif;  
      }

      p {
          margin: 1.5rem 0; 
      }

      .types {
          display: flex;
          align-items: center;  
          color: #949494;  

          .categorie {
            display: flex;
            align-items: center;  
            border-right: 1px solid #969696;  
            padding-right: 1rem; 
          } 
          .comments {
            display: flex;
            align-items: center; 
            margin-left: 1.5rem; 
          }
      }
  }

`