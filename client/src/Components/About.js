import React from "react";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Wrapper>
        <BigText>dudgy</BigText>
        <ParText>
          i thought it would be fun to squat some domains that might otherwise
          be used by political organizations.{" "}
        </ParText>
        <ParText>
          the domains cost about $30 CAD anually, donations are mandatory
        </ParText>
        <SmallText>BTC:39JPxGKfu1en9spR95UmSBZkef692i9iZY</SmallText>
        <SmallText> DOGE:DRCbM8bioPEamwDLYXSZsATT5WgZcTgjKP</SmallText>
        <SmallText> ETH:0x8Db108027a2E8Ff4Ee2Ae41480d58bDe0f90B5fD</SmallText>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  height: 70vh;
  width: 70vw;
  background-color: darkblue;
`;

const BigText = styled.h2`
  color: darkblue;
  font-family: monospace;
  font-weight: bold;
  background-color: darkgrey;
`;

const ParText = styled.h2`
  margin-left: 1rem;
  color: white;
  font-family: monospace;
  font-weight: bold;
`;

const SmallText = styled.p`
  color: white;
  font-family: monospace;
  font-weight: bold;
  @media (min-width: 559px) {
    font-size: 1rem;
  }
  @media (max-width: 559px) {
    font-size: 10px;
  }
  @media (max-width: 559px) {
    font-size: 8px;
  }
  @media (max-width: 357px) {
    font-size: 7px;
  }
`;

export default About;
