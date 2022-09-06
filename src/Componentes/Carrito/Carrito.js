import { TYPES } from "../Utilidades/actions"
import styled from "styled-components"
import CarritoItem from "./CarritoItem"
import { cartInitialState } from "./cartReducer"
import axios from "axios"

const Carrito = ({data, dispatch}) => {
  const { products, cart } = data

  const removeFromCart = async (btnType, id) => {
    const itemIncart = cart.find((item) => item.id === id);
    const endpoint = `http://localhost:3001/cart/${id}`;

    if (btnType === "REMOVE_ALL_PRODUCTS" || (btnType === "REMOVE_ONE_PRODUCT" && itemIncart.count === 1)) {
      
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
  } 

  const clearCart = () => {
    let options = {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }
    cart.forEach(async item => {
      const endpoint = `http://localhost:3001/cart/${item.id}`;
      let res = await axios(endpoint,options)
    });

    dispatch({ type: TYPES.CLEAR_CART });
  }

  let total = 0;
  cart.map(item => total += item.price * item.count);



  return (
    <MainContainer>
      <h1>CARRITO DE COMPRAS</h1>
      <div style={{ width: '40%', border: '3px solid black', height: '300px', overflowY: 'scroll' }}>
        {
          cart.map(item => <CarritoItem key={item.id} data={item} removeFromCart={removeFromCart} />)
        }
      </div>
      <button onClick={() => clearCart()}>limpiar</button>

      <h3>total: ${total.toFixed(2)}</h3>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default Carrito