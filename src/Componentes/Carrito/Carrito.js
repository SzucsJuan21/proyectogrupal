import { useReducer, useEffect } from "react"
import { TYPES } from "../Utilidades/actions"
import { cartInitialState, cartReducer } from "./cartReducer"
import styled from "styled-components"
import Producto from "./Producto"
import CarritoItem from "./CarritoItem"
import axios from 'axios'

const Carrito = ({data, dispatch}) => {
  const { products, cart } = data

  const removeFromCart = (btnType, id) => dispatch({ type: btnType, payload: id });

  const clearCart = () => dispatch({ type: TYPES.CLEAR_CART });

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