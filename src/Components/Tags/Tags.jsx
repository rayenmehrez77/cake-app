import React from "react";
import styled from "styled-components";

const Tags = () => {
  return (
    <Wrapper>
      <h3>Tags</h3>
      <ul>
        <li>
          <a href="#">project</a>
        </li>
        <li>
          <a href="#">love</a>
        </li>
        <li>
          <a href="#">technology</a>
        </li>
        <li>
          <a href="#">travel</a>
        </li>
        <li>
          <a href="#">restaurant</a>
        </li>
        <li>
          <a href="#">life style</a>
        </li>
        <li>
          <a href="#">design</a>
        </li>
        <li>
          <a href="#">illustration</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Tags;

const Wrapper = styled.div`
  padding: 2rem 3rem;
  background-color: #fbf9ff;
  margin: 2rem 0;
  h3 {
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
    font-weight: 500;
    font-family: "Quicksand", sans-serif;
    color: #6e6e6e;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      margin: 0.5rem;
      border: 1px solid #f3eefc;
      background-color: #fff;
      padding: 0.2rem 0.5rem;
      font-size: 0.9rem;
      transition: all 0.4s ease;

      a {
        text-decoration: none;
        color: #9c9c9c;
        font-weight: 500;
      }
      :hover {
        a {
          color: #fff;
        }
        background-color: var(--primary-color);
      }
    }
  }
`;
