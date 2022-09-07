import "./App.css";
import Header from "./Componentes/Header/Header";
import Itemlista from "./Componentes/Footer/item";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import CatalogoA from "./Rutas/CatalogoA";
import CatalogoB from "./Rutas/CatalogoB"
import BannerRS from './Componentes/Banner Redes Sociales/BannerRS';
import axios from "axios";
import { useReducer, useEffect, useState } from "react";
import { cartInitialState, cartReducer } from "./Componentes/Carrito/cartReducer";
import { TYPES } from "./Componentes/Utilidades/actions";
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";


function App() {
  // GET productos y carrito
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [isLoading, setIsLoading] = useState(true)
  const [status, setStatus] = useState(null)
  const updateCart = async () => {
    const resProducts = await axios.get('http://localhost:3001/products'),
    resCart = await axios.get('http://localhost:3001/cart');
    setStatus(resProducts.status)
    
    const productsList = await resProducts.data,
      cartList = await resCart.data;
    dispatch({ type: TYPES.GET_STATE, payload: [productsList, cartList] })
  } 
  useEffect(() => {
    setIsLoading(true)
    updateCart()
    setIsLoading(false)
  }, [])
  // GET productos y carrito
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  
 

  return (
    <>
      <header style={s.header}>
        <Header data={state.cart} />
      </header>

      <main style={s.main}>
        <Routes>

          <Route path='/' exact element={<Home data={state} status={status} dispatch={dispatch} />} />
          <Route path='/tienda/panaderia' element={<CatalogoA data={state} status={status} isLoading={isLoading} dispatch={dispatch} />} />
          <Route path='/tienda/pasteleria' element={<CatalogoB data={state} status={status} isLoading={isLoading} dispatch={dispatch} />} />
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
    margin: '140px auto',
  },
};

export default App;
