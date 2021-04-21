import React from 'react'
import styled from 'styled-components'
import CustomButton from '../CustomButton/CustomButton'; 
import bannerImg from "../../images/cake-banner.png"; 

const Banner = () => {
    return (
        <BannerWrapper>
            <div className="banner__left">
                <h1>Delicious Cake For Everyone</h1> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicin que, omnis iusto recusandae repudiandae</p> 
                <CustomButton to="/explore">Explore Menu</CustomButton>
            </div>
            <div className="banner__right">
                <img src={bannerImg} alt="cake image"/> 
            </div>
        </BannerWrapper>
    )
}

export default Banner


const BannerWrapper = styled.div`
    height: 80vh; 
    padding: 4rem 0; 
    background-color: var(--bg-primary);  
    display: flex; 
    justify-content: space-between;
    padding-right: 5rem;
    align-items: center;

    .banner__left{
        padding: 8rem 13rem; 

        h1 {
            font-size: 4rem; 
            font-family: "Lobster", sans-serif; 
            font-weight: 400; 
        }

        p {
            margin: 2rem 0 3rem; 
            font-family: "DM Sans", sans-serif; 
            font-weight: 500; 
            font-size: 1.2rem; 
            letter-spacing: 0.5px;
            width: 35rem; 
        }
        .custom-button {
            padding: 1rem 1.8rem; 
            font-size: 1.5rem; 
        }

    }
    
    .banner__right img {
        width: 30rem; 
        margin-right: 4rem; 
    }
`