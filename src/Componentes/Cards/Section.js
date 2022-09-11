import React from "react";
import "./Section.css";
import Cards from "./Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";

const Section = ({ data, dispatch }) => {
  const { products, cart } = data;

  const addToCart = async (id) => {
<<<<<<< HEAD
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
=======
    
>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441

    const addedItem = products.find((item) => item.id === id);
    const itemIncart = cart.find((item) => item.id === id);

    if (itemIncart) {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count + 1 }),
      };

      let res = await axios(`http://localhost:3001/cart/${id}`, options);
<<<<<<< HEAD
      let item = await res.data;
=======
      if (res.status >= 200 && res.status < 300) dispatch({ type: TYPES.ADD_TO_CART, payload: id });
>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: 1 }),
      };

      let res = await axios("http://localhost:3001/cart", options);
<<<<<<< HEAD
      let item = await res.data;
=======
      if (res.status >= 200 && res.status < 300) dispatch({ type: TYPES.ADD_TO_CART, payload: id });
>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441
    }
  };

  return (
<<<<<<< HEAD
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
=======
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
                fontSize: "27px",
                fontFamily: "Crete Round, serif",
                letterSpacing: "1px",
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
>>>>>>> 93e827e1941a8aaef32150c2e9372be528320441
  );
};

export default Section;
