import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./Section.css";
import Cards from "./Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";
import Confirmacion from "./Confirmacion";
import { dbContext } from "../../App";


const Section = () => {
  const { data, dispatch } = useContext(dbContext)
  const { products, cart } = data;
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = async (id, amount) => {
    const addedItem = products.find((item) => item.id === id);
    const itemIncart = cart.find((item) => item.id === id);

    if (itemIncart) {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({
          ...itemIncart,
          count: itemIncart.count + amount,
        }),
      };

      let res = await axios(`http://localhost:3001/cart/${id}`, options);
      if (res.status >= 200 && res.status < 300) {
        dispatch({
          type: TYPES.ADD_TO_CART,
          payload: { id: id, amount: amount },
        });
      }
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: amount }),
      };

      let res = await axios("http://localhost:3001/cart", options);
      if (res.status >= 200 && res.status < 300) {
        dispatch({
          type: TYPES.ADD_TO_CART,
          payload: { id: id, amount: amount },
        });
      }
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
            margin: "20px 0",
          }}
        >
          <AnimatePresence>
            {isConfirmation && (
              <Confirmacion
                addToCart={addToCart}
                selectedProduct={selectedProduct}
                setIsConfirmation={setIsConfirmation}
              />
            )}
          </AnimatePresence>
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
                    setIsConfirmation={setIsConfirmation}
                    setSelectedProduct={setSelectedProduct}
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
