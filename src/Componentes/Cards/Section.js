import React from "react";
import "./Section.css";
import Cards from "./Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";

const Section = ({ data, dispatch }) => {
  const { products, cart } = data;

  const addToCart = async (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });

    const addedItem = products.find((item) => item.id === id);
    const itemIncart = cart.find((item) => item.id === id);

    if (itemIncart) {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count + 1 }),
      };

      let res = await axios(`http://localhost:3001/cart/${id}`, options);
      let item = await res.data;
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: 1 }),
      };

      let res = await axios("http://localhost:3001/cart", options);
      let item = await res.data;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "24px", fontFamily: "Poppins", marginBottom:0 }}>
          Ultimas <span style={{color:'#ff8126'}}>Ofertas</span>
        </h1>
      </div>
      <div className="cards-container">
        {products.map(
          (product) =>
            product.id < 5 && (
              <Cards key={product.id} data={product} addToCart={addToCart} />
            )
        )}
      </div>
    </div>
  );
};

export default Section;
