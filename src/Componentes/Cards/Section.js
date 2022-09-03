import React from "react";
import './Section.css'
import Cards from './Cards'
import budinlimon from "../Imagenes/budinlimon.jpg";
import chipa from "../Imagenes/chipa.jpg";
import pastafrola from "../Imagenes/pastafrola.jpg";
import tostado from "../Imagenes/tostado.jpg";
import { useReducer } from "react";
import { cartReducer, cartInitialState } from "../Carrito/cartReducer"
import axios from "axios";
import { TYPES } from "../Utilidades/actions"

const Section = ({data, dispatch}) => {
  const { products, cart } = data

  const addToCart = async (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id })

    const addedItem = products.find(item => item.id === id)
    const itemIncart = cart.find(item => item.id === id)

    if (itemIncart) {

      let options = {
        method: 'PUT',
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...itemIncart, count: itemIncart.count + 1 })
      }

      let res = await axios(`http://localhost:3001/cart/${id}`, options)
      let item = await res.data

    } else {

      let options = {
        method: 'POST',
        headers: { "content-type": "application/json" },
        data: JSON.stringify({ ...addedItem, count: 1 })
      }

      let res = await axios('http://localhost:3001/cart', options)
      let item = await res.data

    }
  };

  return (
    <div className="cards-container">
      {products.map((product) => (
        product.id < 5 && <Cards key={product.id} data={product} addToCart={addToCart}  />
      ))}
    </div>
  );
};

export default Section;
