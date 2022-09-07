import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  // font-family: Poppins, sans-serif;
  font-family: 'Crete Round', serif;
  line-height: 1.7;
  text-align: justify;
  display: flex;
  margin-top: 10px;
  flex-direction: column;

`;
export default SubSection;
