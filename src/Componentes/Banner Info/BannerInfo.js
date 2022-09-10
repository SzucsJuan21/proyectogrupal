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
      <img
        style={{
          width: "100px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={logo}
        alt={'logo'}
      ></img>
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

export default BannerInfo;
