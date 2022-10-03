import React from "react";
import SubSection from "./SubSection";
import panaderia from "../Seccion info/img/panaderia.webp";
import Boton from "../Utilidades/Boton";
import styled from "styled-components";

const MainContainer = () => {
  return (
    <Container>
      <SubSection>
        <h1
          style={{
            color: "#FF8126",
            margin: "0",
            fontSize: "30px",
            letterSpacing: "2px"
          }}
        >
          OBJETIVO
        </h1>
        <h3>
          Nuestro objetivo es lograr un vínculo de confianza con el cliente. Para eso, 
          ponemos a su disposición nuestras elaboraciones realizadas con la mejor
          materia prima del mercado. {" "} 
        </h3>
        <h1
          style={{
            color: "#FF8126",
            margin: "0",
            fontSize: "30px",
            letterSpacing: "2px"
          }}
        >
          VISION
        </h1>
        <h3>
          Lograr posicionar al negocio, dentro del rubro Panadería/Pastelería, como uno
          de los 3 mejores del país, para los próximos años. {" "} 
        </h3>
        <h1
          style={{
            color: "#FF8126",
            margin: "0",
            fontSize: "30px",
            letterSpacing: "2px"
          }}
        >
          STAFF
        </h1>
        <h3>
          Contamos con un equipo de maestros panaderos y pasteleros que impulsados por su
          creatividad combinan técnicas tradicionales y modernas con el fin de obtener productos
          únicos y originales. {" "} 
        </h3>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "300px" }}>
            <Boton
              color="#FF8126"
              colorHover="#D96817"
              texto="Descubre nuestros productos"
            />
          </div>
        </div>
      </SubSection>
      <ImgWrapper>
        <Img src={panaderia} alt='panaderia'></Img>
      </ImgWrapper> 
    </Container>
  );
};

const Container = styled.div`
  overflow: hidden;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 56% auto;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1280px) {
    margin: 20px 0;
  }
`;

const Img = styled.img`
  height: 100%;
  border-radius: 10px;
  @media (max-width: 1280px) {
    width: 70%;
  }
  @media (max-width: 720px) {
    width: 90%;
  }
`;

export default MainContainer;
