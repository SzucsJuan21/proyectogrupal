import React from "react";
import Boton from "../Utilidades/Boton";
import logo from "../Banner Info/img/logo.png";
import background from '../Banner Info/img/background.jpg'

const BannerInfo = (props) => {
  return (
    <div
      style={{
        width: "100%",
        height: "395px",
        backgroundImage: `url(${background})`
      }}
    >
      <h1
        style={{
          textAlign: "center",
          paddingTop: "70px",
          color: "white",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Our Charity Partner, City Bakery
      </h1>
      <img
        style={{
          width: "100px",
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingTop: '20px'
        }}
        src={logo}
      ></img>
      <div
        style={{
          position: "relative",
          paddingLeft: "830px",
          paddingTop: "30px",
        }}
      >
        <Boton color="#FF8126" texto="Discover our Producers" />
      </div>
    </div>
  );
};
export default BannerInfo;
