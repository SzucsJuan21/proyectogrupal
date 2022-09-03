import React from "react";
import styled from "styled-components";
import "./Cards.css";
import "./Section.css";

const Cards = ({ data, addToCart }) => {
  return (
    <figure className="figure-card">
      <img className="img-bakery" src={data.img} alt={data.title} />
      <figcaption className="card-fcaption">
        <div style={{ marginTop: "15px" }}>
          <h3 className="item-title">{data.title}</h3>
          <p className="valores">${data.price}</p>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Btn onClick={() => addToCart(data.id)}>Añadir al carro</Btn>
        </div>
      </figcaption>
    </figure>
  );
};

const Btn = styled.button`
  border: 0;
  height: 2rem;
  border-radius: 5px;
  min-width: 150px;
  cursor: pointer;
  background-color: #ff8126;
  transition: 200ms;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  &:hover {
    background-color: #d96817;
  }
`;

export default Cards;
