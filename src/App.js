import "./App.css";
import Header from "./Componentes/Header/Header";
import Itemlista from "./Componentes/Footer/item";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import CatalogoA from "./Rutas/CatalogoA";
import CatalogoB from "./Rutas/CatalogoB"
import BannerRS from './Componentes/Banner Redes Sociales/BannerRS';
import axios from "axios";
import { useReducer, useEffect } from "react";
import { cartInitialState, cartReducer } from "./Componentes/Carrito/cartReducer";
import { TYPES } from "./Componentes/Utilidades/actions";
import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
  // GET carrito
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const updateCart = async () => {
    const resProducts = await axios.get('http://localhost:3001/products'),
      resCart = await axios.get('http://localhost:3001/cart');
    const productsList = await resProducts.data,
      cartList = await resCart.data;
    dispatch({ type: TYPES.GET_STATE, payload: [productsList, cartList] })
  } 
  useEffect(() => {
    updateCart()
  }, [])
  // GET carrito
 

  return (
    <>
      <header style={s.header}>
        <Header data={state.cart} />
      </header>

      <main style={s.main}>
        <Routes>

          <Route path='/' exact element={<Home data={state} dispatch={dispatch} />} />
          <Route path='/tienda/a' element={<CatalogoA data={state} dispatch={dispatch} />} />
          <Route path='/tienda/b' element={<CatalogoB data={state} dispatch={dispatch} />} />
          <Route path='/carrito' element={<RutaCarrito data={state} dispatch={dispatch} />} />

        </Routes>
      </main>

      <footer>
        <BannerRS />
        <Itemlista />
      </footer>
    </>

  );
}

const s = {
  header: {
    backgroundColor: "#fff",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "2",
  },
  main: {
    margin: '140px 0',
  },
};

export default App;
