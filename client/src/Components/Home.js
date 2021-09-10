import React from "react";
import Footer from "./Footer";
import styled from "styled-components";

const Home = () => {
  return (
    <>
      <Wrapper>
        <Header>this site has been hacked by antifa</Header>
        <HTwo>
          please consider donating bitcoin to the george soros yacht fund:
          39JPxGKfu1en9spR95UmSBZkef692i9iZY
        </HTwo>
      </Wrapper>
      <Footer />
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0;
`;
const Header = styled.h1`
  color: white;
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 414px) {
    font-size: 28px;
  }
`;

const HTwo = styled.h2`
  color: white;
  text-align: center;
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 414px) {
    font-size: 28px;
  }
`;

export default Home;
