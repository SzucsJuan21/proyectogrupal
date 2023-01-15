import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./Section.css";
import Cards from "./Cards";
import Confirmacion from "./Confirmacion";
import { TYPES } from "../../Utilidades/actions";
import { dbContext } from "../../../App";

const Section = () => {
  const { data, dispatch } = useContext(dbContext);
  const { products, cart } = data;
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = async (id, amount) => {
    const itemIncart = cart.find((item) => item.id === id);
    
    if (itemIncart) {
      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: { id: id, amount: amount },
      });
    } else {
      dispatch({
        type: TYPES.ADD_TO_CART,
        payload: { id: id, amount: amount },
      });
    }
  };


  return (
    <>
      {products.data && products.data.length > 0 && (
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
            {products.data && products.data.map(
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
