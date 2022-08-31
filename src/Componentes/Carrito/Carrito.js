import { useReducer } from "react"
import { TYPES } from "../Utilidades/actions"
import { cartInitialState, cartReducer } from "./cartReducer"
import styled from "styled-components"
import Producto from "./Producto"
import CarritoItem from "./CarritoItem"

const Carrito = () => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { products, cart } = state
  const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id});
  const removeFromCart = (ty,id) => dispatch({type: ty, payload: id});
  const clearCart = () => dispatch({type: TYPES.CLEAR_CART});

  return (
    <MainContainer>
      <h1>CARRITO DE COMPRAS</h1>
      <div style={{ width: '40%', border: '3px solid black', height: '300px', overflowY: 'scroll' }}>
        {
          cart.map(item => <CarritoItem key={item.id} data={item} removeFromCart={removeFromCart} />)
        }
      </div>
      <button onClick={() => clearCart()}>limpiar</button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          products.map(product => <Producto key={product.id} data={product} addToCart={addToCart} />)
        }
      </div>
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