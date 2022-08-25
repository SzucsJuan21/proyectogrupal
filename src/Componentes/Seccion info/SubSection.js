import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  width: 90%;
  margin-bottom: 50px;
  font-family: Poppins, sans-serif;
  line-height: 1.6;
  text-align: left;
  display: flex;
  flex-direction: column;

  @media (min-width: 1260px) {
    width: 640px;
    height: 600px;
    font-family: Poppins, sans-serif;
    line-height: 1.6;
    display: flex;
    justify-content: space-around;
    margin: 10px;
    
    
  }
  @media (min-width: 620px) {
    
  }
`;
export default SubSection;
