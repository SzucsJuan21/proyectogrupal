import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
<<<<<<< HEAD
  width: 80%;
  margin-bottom: 50px;
=======
>>>>>>> 9a84d06c40259a9b284415730d642ced3b2a2c17
  font-family: Poppins, sans-serif;
  line-height: 1.6;
  text-align: left;
  display: flex;
  flex-direction: column;

<<<<<<< HEAD
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
    width: 90%;
    padding-left: 20px
  }
=======
>>>>>>> 9a84d06c40259a9b284415730d642ced3b2a2c17
`;
export default SubSection;
