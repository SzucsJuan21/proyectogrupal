import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  font-family: Poppins, sans-serif;
  line-height: 1.6;
  text-align: left;
  display: flex;
  flex-direction: column;

`;
export default SubSection;
