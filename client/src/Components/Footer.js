import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";

const Footer = () => {
return (
    <>
    <Wrapper>
<StyledLink to="/about">About</StyledLink>
    </Wrapper>
    </>
)
}

const Wrapper = styled.div`
display: flex;
justify-content: center;
background-color: black;
height: 2rem;
width: 100vw;
z-index: 100;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  @media (min-width: 1024px) {
    font-size: 10px;
  }
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
  }
`;
export default Footer