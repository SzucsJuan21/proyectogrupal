import styled from "styled-components";
import Cards from "../Cards/Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";
import Confirmacion from "../Cards/Confirmacion";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { dbContext } from "../../App";

const Catalogo = ({ category }) => {
  const { data, status, dispatch } = useContext(dbContext)
  const { products, cart } = data;
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null)

  const addToCart = async (id, amount) => {
    const addedItem = products.find((item) => item.id === id);
    const itemIncart = cart.find((item) => item.id === id);

    if (itemIncart) {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count + amount }),
      };

      let res = await axios(`http://181.98.82.214:3002/products/${id}`, options);
      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: TYPES.ADD_TO_CART, payload: {id: id, amount: amount} });
      }
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: amount }),
      };

      let res = await axios("http://181.98.82.214:3002/cart", options);
      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: TYPES.ADD_TO_CART, payload: {id: id, amount: amount} });
      }
    }
  };
  return (
    <MainContainer>
      {status === null && <Loading>Cargando...</Loading>}
      {(status < 200 || status >= 300) && status !== null && (
        <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <h1 style={{ color: "#e40000", fontSize: "30px" }}>
            Error {status}: Fallo al recibir los datos
          </h1>
        </div>
      )}

        <AnimatePresence>
          {isConfirmation && <Confirmacion addToCart={addToCart} selectedProduct={selectedProduct} setIsConfirmation={setIsConfirmation} />}
        </AnimatePresence>

      <CardContainer>
        {products.map(
          (product) =>
            product.category === category && (
              <Cards
                key={product.id}
                data={product}
                setIsConfirmation={setIsConfirmation}
                setSelectedProduct={setSelectedProduct}
              />
            )
        )}
      </CardContainer>
    </MainContainer>
  );
};

const Loading = styled.div`
  height: 740px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
`;

const MainContainer = styled.div`
  min-height: 740px;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 620px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 920px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export default Catalogo;
