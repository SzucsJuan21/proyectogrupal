import styled from "styled-components";
import { TYPES } from "../Utilidades/actions";
import React from "react";

const CarritoItem = ({ data, removeFromCart, increaseAmount }) => {
  return (
    <Container>
      <Text>
        <div style={{ display: "flex", alignItems: "center" }}>
          <QuantityBtns onClick={() => removeFromCart(TYPES.REMOVE_ONE_PRODUCT, data.id)}>-</QuantityBtns>
          <p style={{margin:0}}>x{data.count ? data.count : 1} </p>
          <QuantityBtns onClick={() => increaseAmount(data.id)}>+</QuantityBtns>
        </div>
        <p style={{ textAlign: "center" }}>{data.title}</p>
        <p>
          $
          {data.count
            ? (data.price * data.count).toFixed(2)
            : data.price.toFixed(2)}
        </p>
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "7px",
        }}
      >
        <Button
          onClick={() => removeFromCart(TYPES.REMOVE_ONE_PRODUCT, data.id)}
        >
          Remover
        </Button>
        <Button
          onClick={() => removeFromCart(TYPES.REMOVE_ALL_PRODUCTS, data.id)}
        >
          Remover todos
        </Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100px;
  background-color: white;
  border-bottom: solid 1px grey;
  position: relative;

  @media (min-width: 1260px) {
    height: 120px;
  }
`;
const Text = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  font-family: Poppins, sans-serif;
  font-size: 17px;
  margin-left: 15px;
  margin-right: 15px;
  font-weight: bold;

  @media (min-width: 1260px) {
    margin-left: 40px;
    margin-right: 40px;
    font-size: 20px;
  }
`;
const Button = styled.button`
  border: 0;
  height: 2rem;
  border-radius: 5px;
  width: 130px;
  cursor: pointer;
  background: #ff8126;
  transition: 200ms;
  font-size: 17px;
  color: #fff;
  font-weight: 500;
  margin-right: 10px;
  &:hover {
    background: #fcbd90;
  }
`;

const QuantityBtns = styled.button`
  all: unset;
  color: white;
  background-color: #ff8126;
  margin: 0 5px;
  width: 20px;
  height: 20px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  transition: 200ms;
  &:hover {
    background-color: #fcbd90;
  }
`;

export default CarritoItem;
