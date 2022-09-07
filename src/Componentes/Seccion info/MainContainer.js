import React from "react";
import SubSection from "./SubSection";
import panaderia from "../Seccion info/img/panaderia.jpg";
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
          }}
        >
          Who Makes{" "}
          <span
            style={{
              color: "black",
            }}
          >
            Your Food
          </span>
        </h1>
        <h3>
          Our mission is to help grow the local food ecosystem in BC and across
          Canada. Why?{" "}
        </h3>
        <ul
          style={{
            lineHeight: 3,
            fontSize: "18px",
          }}
        >
          <li>
            Because it connects us to the land we live on, and to the people who
            live here.
          </li>
          <li>
            Because it's more meaningful to cook and eat something made by a
            person nearby than by some distant corporation
          </li>
          <li>
            Because good local food makes our corner of the world a better place
            to live
          </li>
          <li>Because it supports local jobs</li>
          <li>Because it makes more sense for the environment</li>
        </ul>

        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "300px" }}>
            <Boton
              color="#FF8126"
              colorHover="#D96817"
              texto="Discover our Producers"
            />
          </div>
        </div>
      </SubSection>
      <ImgWrapper>
        <Img src={panaderia}></Img>
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
  width: 100%;
  @media (max-width: 1280px) {
    width: 80%;
  }
`;

export default MainContainer;
