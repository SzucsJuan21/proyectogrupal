import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import CatalogoA from "./Rutas/CatalogoA";
import CatalogoB from "./Rutas/CatalogoB";
import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import axios from "axios";
import { useReducer, useEffect, useState, createContext } from "react";
import {
  cartInitialState,
  cartReducer,
} from "./Componentes/Carrito/cartReducer";
import { TYPES } from "./Componentes/Utilidades/actions";
import { Route, Routes, useLocation } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";

export const dbContext = createContext();

function App() {
  // GET productos y carrito
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [status, setStatus] = useState(null);
  const [cookies, setCookie] = useCookies();

  const updateCart = async () => {
    let productsList;

    await axios
      .get(
        "https://raw.githubusercontent.com/SzucsJuan21/proyectogrupal/main/src/Assets/db.json"
      )
      .catch((err) => setStatus(err.response.status))
      .then((res) => {
        setStatus(res.status);
        productsList = res.data.products;
        dispatch({
          type: TYPES.GET_STATE,
          payload: [productsList, cookies.CART_STATE ? cookies.CART_STATE : []],
        });
      });
  };
  useEffect(() => {
    updateCart();
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    setCookie("CART_STATE", state.cart);
    // eslint-disable-next-line
  }, [state.cart]);
  // GET productos y carrito

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  
  return (
    <>
      <Header data={state.cart} />

      <main style={s.main}>
        <dbContext.Provider
          value={{ data: state, status: status, dispatch: dispatch }}
        >
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/tienda/panaderia" element={<CatalogoA />} />
            <Route path="/tienda/pasteleria" element={<CatalogoB />} />
            <Route path="/carrito" element={<RutaCarrito />} />
          </Routes>
        </dbContext.Provider>
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
    margin: "auto",
  },
};

export default App;
