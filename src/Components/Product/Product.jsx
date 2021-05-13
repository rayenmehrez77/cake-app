import React, { useContext } from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton";

const Product = ({ recipe }) => {
  const { label, image, dietLabels, url } = recipe || {};

  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt="logo" />
      </div>
      <span>{dietLabels}</span>
      <div className="content">
        <h4>{label}</h4>
      </div>
      <CustomButton as="a" href={url} target="_blank" shadow>
        More details
      </CustomButton>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  background-color: var(--secondary-color);
  border-radius: 10px;
  border-bottom-right-radius: 5rem;
  padding-bottom: 3rem;
  position: relative;
  margin: 2rem;
  .content {
    height: 3rem;
  }

  .img-container {
    img {
      width: 100%;
      height: 10rem;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  h4 {
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    margin: 1rem 0 1.5rem;
  }

  :hover {
    cursor: pointer;
    box-shadow: 5px 3px 5px #dfdfdf;
    transform: scale(1.03);

    img {
      overflow: hidden;
    }

    .custom-button {
      transform: translateY(15px);
    }
  }
`;
