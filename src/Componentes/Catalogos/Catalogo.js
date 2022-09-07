import styled from "styled-components";
import Cards from "../Cards/Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";

const Catalogo = ({ category, data, dispatch, status }) => {
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
      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
      }
    } else {
      let options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: 1 }),
      };

      let res = await axios("http://localhost:3001/cart", options);
      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
      }
    }
  };
  return (
    <MainContainer>
      <CardContainer>
        {status === null && (
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <h1 style={{ fontSize: "30px" }}>
              Cargando...
            </h1>
          </div>
        )}
        {status < 200 && status >= 300 && (
          <div
            style={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <h1 style={{ color: "red", fontSize: "30px" }}>
              Error {status}: Fallo al recibir los datos
            </h1>
          </div>
        )}
        {products.map(
          (product) =>
            product.category === category && (
              <Cards key={product.id} data={product} addToCart={addToCart} />
            )
        )}
      </CardContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  justify-content: space-between;
  width: fit-content;
`;

export default Catalogo;
