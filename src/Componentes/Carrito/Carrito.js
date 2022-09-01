import { useReducer, useEffect } from "react"
import { TYPES } from "../Utilidades/actions"
import { cartInitialState, cartReducer } from "./cartReducer"
import styled from "styled-components"
import Producto from "./Producto"
import CarritoItem from "./CarritoItem"
import axios from 'axios'

const Carrito = () => {

  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const { products, cart } = state

  const updateCart = async () => {
    const resProducts = await axios.get('http://localhost:3001/products'),
      resCart = await axios.get('http://localhost:3001/cart');

    const productsList = await resProducts.data,
      cartList = await resCart.data;

    dispatch({ type: TYPES.READ_STATE, payload: [productsList, cartList] })
  }

  useEffect(() => {
    updateCart()
  }, [])



  const addToCart = async (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })
    
    const addedItem = products.find(item => item.id === id)
    const itemIncart = cart.find(item => item.id === id)

    if (itemIncart) {
      
      let options = {
        method: 'PUT',
        headers: { "content-type": "application/json" },
        data: JSON.stringify({...itemIncart, count: itemIncart.count + 1})
      }

      let res = await axios(`http://localhost:3001/cart/${id}`, options)

    } else {

      let options = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        data: JSON.stringify(addedItem)
      }

      let res = await axios('http://localhost:3001/cart', options)

    }
  };

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

      <h3>total: ${total}</h3>

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