import React from "react";
import Boton from "../Utilidades/Boton";
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
        Our Charity Partner, City Bakery
      </h1>
      <img
        style={{
          width: "100px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        src={logo}
      ></img>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${background});
  align-items: center;
`;

export default BannerInfo;
