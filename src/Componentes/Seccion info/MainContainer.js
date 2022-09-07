import React from "react";
import SubSection from "./SubSection";
import img1 from "../Seccion info/img/img1.jpg";
import Boton from "../Utilidades/Boton";
import styled from "styled-components";

const MainContainer = () => {
  return (
    <Container>
      <SubSection>
        <h1
          style={{
            color: "#FF8126",
            margin: '0',
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
            lineHeight: "220%",
            
            
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
        <Boton color="#FF8126" colorHover="#D96817" texto="Discover our Producers" />
      </SubSection>
      <SubSection>
        <img
          style={{
            objectFit: "fill",
          }}
          src={img1}
        ></img>
        </SubSection>
      
      
    </Container>
  );
};

const Container = styled.div `
width: 90%;
height: 120vh;
margin: auto;
display: grid;
grid-template-rows: auto, auto;
border-radius: 5px; 
margin-bottom: 100px;

@media (min-width: 580px) {
  height: 100vh;
 grid-template-rows: 90%, auto;
}
@media (min-width: 620px) {
  height: 120vh;
 margin: 20px
}
@media (min-width: 900px) {
  height: 140vh;
 margin: 20px;
 grid-template-rows: auto, 40%;

}
@media (min-width: 1260px) {
  width: 80%;
  height: 600px;
  display: grid;
  grid-template-columns: auto auto;
  border-radius: 5px;
  align-items: center;
  margin: auto;
  padding-bottom: 25px
};
`

export default MainContainer;
