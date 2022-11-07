import "./App.css";
import Header from "./Componentes/Header/Header";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import CatalogoA from "./Rutas/CatalogoA";
import CatalogoB from "./Rutas/CatalogoB";
import BannerRS from "./Componentes/Footer/Banner Redes Sociales/BannerRS";
import axios from "axios";
import { useReducer, useEffect, useState, createContext } from "react";
import { cartInitialState, cartReducer } from "./Componentes/Carrito/cartReducer";
import { TYPES } from "./Componentes/Utilidades/actions";
import { Route, Routes, useLocation } from "react-router-dom";
import useCookies from "react-cookie/cjs/useCookies";
import Registracion from "./Rutas/Registracion";

export const loginContext = createContext();
export const dbContext = createContext();

function App() {
    // GET productos y carrito
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const [status, setStatus] = useState(null);
    const [cookies, setCookie] = useCookies();
    const [currentUser, setCurrentUser] = useState(null);

    const attemptLogin = async () => {
        if (!cookies.LOGIN_TOKEN) return;

        await axios(process.env.REACT_APP_API + "/users/login-token/", {
            method: "POST",
            headers: { Authorization: `Bearer ${cookies.LOGIN_TOKEN}` },
        })
            .then((res) => setCurrentUser(res.data.user))
            .catch((err) => alert("Ocurrio un error al iniciar sesión"));
    };

    const updateCart = async () => {
        let productsList;

        axios
            .get(process.env.REACT_APP_API + "/products")
            .catch((err) => setStatus(err.response.status))
            .then((res) => {
                setStatus(res.status);
                productsList = res.data;
                dispatch({
                    type: TYPES.GET_STATE,
                    payload: [productsList, cookies.CART_STATE ? cookies.CART_STATE : []],
                });
            });
    };
    useEffect(() => {
        attemptLogin();
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
            <loginContext.Provider value={currentUser}>
                <Header data={state.cart} />

                <main style={s.main}>
                    <dbContext.Provider value={{ data: state, status: status, dispatch: dispatch }}>
                        {/* prettier-ignore */}
                        <Routes>
                        <Route path="/" exact element={<Home />} />
                        <Route path="/tienda/panaderia" element={<CatalogoA />} />
                        <Route path="/tienda/pasteleria" element={<CatalogoB />} />
                        <Route path="/carrito" element={<RutaCarrito />} />
                        <Route path="/registrarse" element={<Registracion />}/>
                    </Routes>
                    </dbContext.Provider>
                </main>

                <footer style={s.footer}>
                    <BannerRS />
                    <Footer />
                </footer>
            </loginContext.Provider>
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
