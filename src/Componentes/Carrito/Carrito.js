import { TYPES } from "../Utilidades/actions";
import styled from "styled-components";
import CarritoItem from "./CarritoItem";
import axios from "axios";

const Carrito = ({ data, dispatch }) => {
  const { cart } = data;

  const removeFromCart = async (btnType, id) => {
    const itemIncart = cart.find((item) => item.id === id);
    const endpoint = `http://localhost:3001/cart/${id}`;

    if (
      btnType === "REMOVE_ALL_PRODUCTS" ||
      (btnType === "REMOVE_ONE_PRODUCT" && itemIncart.count === 1)
    ) {
      let options = {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      };
      let res = await axios(endpoint, options);

      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: btnType, payload: id });
      }
    } else if (btnType === "REMOVE_ONE_PRODUCT") {
      let options = {
        method: "PUT",
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count - 1 }),
      };
      let res = await axios(endpoint, options);

      if (res.status >= 200 && res.status < 300) {
        dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: id });
      }
    }
  };

  const clearCart = async () => {
    let options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    };

    cart.forEach(async (item) => {
      const endpoint = `http://localhost:3001/cart/${item.id}`;
      // eslint-disable-next-line
      let res = await axios(endpoint, options);
    });

    dispatch({ type: TYPES.CLEAR_CART });
  };

  let total = 0;
  cart.map((item) => (total += item.price * item.count));

  return (
    <MainContainer>
      <h1>CARRITO DE COMPRAS</h1>
      <CartContainer>
        {cart.map((item) => (
          <CarritoItem
            key={item.id}
            data={item}
            removeFromCart={removeFromCart}
          />
        ))}
      </CartContainer>
      <Button onClick={() => clearCart()}>Limpiar</Button>

      <h3 style={{
      fontFamily: 'Poppins, sans-serif', 
      fontSize: '30px', 
      marginTop: '20px',
      marginBottom: '0px',
      padding:'7px',
      border: '2px solid grey',
      borderRadius: '5px'
      }}>Total: ${total.toFixed(2)}</h3>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

const CartContainer = styled.div`
  width: 90%;
  border: 0px solid black;
  border-radius: 5px;
  box-shadow: 0px 0px 15px -2px;
  height: 500px;
  overflow-y: scroll;
  margin-bottom: 10px;

  @media (min-width: 800px) {
    width: 70%;
  }

  @media (min-width: 1260px) {
    width: 50%;
    height: 500px;
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
export default Carrito;
