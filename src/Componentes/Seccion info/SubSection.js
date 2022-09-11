import React from "react";
import styled from "styled-components";

const SubSection = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441
  width: 80%;
  margin-bottom: 50px;
=======
>>>>>>> 9a84d06c40259a9b284415730d642ced3b2a2c17
  font-family: Poppins, sans-serif;
  line-height: 1.6;
  text-align: left;

  
  font-family: 'Crete Round', serif;
  line-height: 1.7;
  text-align: flex-start;

  display: flex;
  margin-top: 10px;
  flex-direction: column;
  width: 90%;
  padding-left: 10px;


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
<<<<<<< HEAD
  @media (min-width: 620px) {
    width: 90%;
    padding-left: 20px
  }
=======
>>>>>>> 9a84d06c40259a9b284415730d642ced3b2a2c17
=======

>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441
`;
export default SubSection;
