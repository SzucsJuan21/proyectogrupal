import React from "react";
import SubSection from "./SubSection";
import img1 from "../Seccion info/img/img1.jpg";
import Boton from "../Utilidades/Boton";

const MainContainer = () => {
  return (
    <div
      style={{
        width: "65%",
        height: "600px",
        margin: "auto",
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "space-between",
        borderRadius: "5px",
        alignItems: "center",
      }}
    >
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
            width: "100%",
            height: "100%",
          }}
          src={img1}
        ></img>
      </SubSection>
      
    </div>
  );
};

export default MainContainer;
