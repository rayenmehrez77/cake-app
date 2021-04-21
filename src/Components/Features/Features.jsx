import React from 'react'
import styled from 'styled-components'
import {TopLine, Feature} from '../../Components'; 
import { ReactComponent as Logo } from "../../images/icon1.svg"
import VideoCover from "../../images/cake-cover.jpg"; 
import { BsFillPlayFill } from "react-icons/bs"; 

const Features = () => {
    return (
        <Wrapper>
            <TopLine margin centered title="Quality is Our First Priority" subtitle="Our Features" className="top-line" /> 
            <div className="features__list">
                <Feature Icon={Logo} title="Pet Boarding" description="consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua."/> 
                <Feature Icon={Logo} title="Pet Boarding" description="consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua."/> 
                <Feature Icon={Logo} title="Pet Boarding" description="consectetur adipiscing elit, serfd dgo eiusmod tempor incididunt ut ore et dolore magna aliqua."/> 
            </div>
            <div className="features__video">
                <div className="video__wrapper">
                    <div className="play-btn">
                        <BsFillPlayFill className="icon" /> 
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Features


const Wrapper = styled.div`
    background-color: var(--secondary-color); 
    min-height: 60vh;  

    .top-line {
        padding: 5rem 0; 
    }

    .features__list {
        padding-bottom: 7rem; 
        display: flex; 
        justify-content: center;
        flex-wrap: wrap; 
     }

     .features__video {
         height: 60vh; 
         background-image: url(${VideoCover}); 
         background-size: cover; 
         background-repeat: no-repeat; 
         position: relative; 
         
        .play-btn {
            position: absolute; 
            top: 50%;
            left: 50%; 
            transform: translate(-50%, -50%); 
            background-color: #fff; 
            border-radius: 100%; 
            width: 10rem; 
            height: 10rem; 
            opacity: 0.7; 
            z-index: 10; 

            .icon {
                width: 100%; 
                height: 100%;
                padding-left: 8px;  
                color: #ff9c2a;  
                opacity: 1 !important;  
            }
        }
    } 


`