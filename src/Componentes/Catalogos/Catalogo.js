import styled from "styled-components";
import Cards from "../Cards/Cards";
import axios from "axios";
import { TYPES } from "../Utilidades/actions";

const Catalogo = ({ category, data, dispatch }) => {
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
    <MainContainer>
      <CardContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardContainer = styled.div`
  margin: 0 80px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export default Catalogo;
