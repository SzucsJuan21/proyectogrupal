import React from "react";
import logo from "../Banner Info/img/logo.png";
import background from "../Banner Info/img/background.jpg";
import styled from "styled-components";

const BannerInfo = (props) => {
  return (
    <Container>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "30px",
          color: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        En Premium Bakery amamos lo que hacemos
      </h1>
      <Img

        src={logo}
        alt={'logo'}
      ></Img>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  margin: 2rem 0;
  background-image: url(${background});
  align-items: center;
`;
const Img = styled.img`
  width: 20%;
  height: 30%;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 530px) {
    width: 20%;
    height: 40%
  }
  @media (min-width: 745px) {
    width: 20%;
    height: 60%
  }
  @media (min-width: 1100px) {
    width: 10%;
    height: 50%
  }
  @media (min-width: 1500px) {
    width: 7%;
    height: 50%
  }
`
export default BannerInfo;
