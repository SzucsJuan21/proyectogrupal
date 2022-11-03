import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  margin-bottom: 50px;
  line-height: 1.6;
  text-align: left;
  font-family: "Crete Round", serif;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 90%;
  padding-left: 10px;

  @media (min-width: 1260px) {
    width: 640px;
    height: 600px;
    font-family: Poppins, sans-serif;
    line-height: 1.6;
    display: flex;
    justify-content: space-around;
    margin: 10px;
  }
`;
export default SubSection;
