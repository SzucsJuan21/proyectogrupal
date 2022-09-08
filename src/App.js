import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import CatalogoA from "./Rutas/CatalogoA";
import CatalogoB from "./Rutas/CatalogoB";
import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import axios from "axios";
import { useReducer, useEffect, useState } from "react";
import {
  cartInitialState,
  cartReducer,
} from "./Componentes/Carrito/cartReducer";
import { TYPES } from "./Componentes/Utilidades/actions";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  // GET productos y carrito
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState(null);
  
  const updateCart = async () => {
    let productsList;
    let cartList;
    
    await axios
      .get("http://localhost:3001/products")
      .catch((err) => setStatus(err.response.status))
      .then((res) => {
        setStatus(res.status);
        productsList = res.data;
      });
    await axios
      .get("http://localhost:3001/cart")
      .then((res) => {
        cartList = res.data;
      });

    dispatch({ type: TYPES.GET_STATE, payload: [productsList, cartList] });
  };
  useEffect(() => {
    setIsLoading(true);
    updateCart();
    setIsLoading(false);
  }, []);
  // GET productos y carrito

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header style={s.header}>
        <Header data={state.cart} />
      </header>

      <main style={s.main}>
        {/* prettier-ignore */}
        <Routes>
          <Route path='/' exact element={<Home data={state} status={status} dispatch={dispatch} />} />
          <Route path='/tienda/panaderia' element={<CatalogoA data={state} status={status} isLoading={isLoading} dispatch={dispatch} />} />
          <Route path='/tienda/pasteleria' element={<CatalogoB data={state} status={status} isLoading={isLoading} dispatch={dispatch} />} />
          <Route path='/carrito' element={<RutaCarrito data={state} dispatch={dispatch} />} />
        </Routes>
      </main>

      <footer style={s.footer}>
        <BannerRS />
        <Footer />
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
    margin: "40px auto",
  },
};

export default App;
