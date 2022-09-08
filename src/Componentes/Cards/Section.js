import React from "react";
import "./Section.css";
import Cards from "./Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";

const Section = ({ data, dispatch }) => {
  const { products, cart } = data;

  const addToCart = async (id) => {
    

    const addedItem = products.find((item) => item.id === id);
    const itemIncart = cart.find((item) => item.id === id);

    if (itemIncart) {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count + 1 }),
      };

      let res = await axios(`http://localhost:3001/cart/${id}`, options);
      if (res.status >= 200 && res.status < 300) dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: 1 }),
      };

      let res = await axios("http://localhost:3001/cart", options);
      if (res.status >= 200 && res.status < 300) dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    }
  };

  return (
    <>
      {products.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            margin: '20px 0',
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "24px",
                fontFamily: "Poppins",
                marginBottom: 0,
              }}
            >
              Ultimas <span style={{ color: "#ff8126" }}>Ofertas</span>
            </h1>
          </div>
          <div className="cards-container">
            {products.map(
              (product) =>
                product.id <= 5 && (
                  <Cards
                    key={product.id}
                    data={product}
                    addToCart={addToCart}
                  />
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Section;
