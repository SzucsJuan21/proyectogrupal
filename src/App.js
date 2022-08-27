import "./App.css";
import Header from "./Componentes/Header/Header";
import Itemlista from "./Componentes/Footer/item";
import Home from "./Rutas/Home";

import {
  Route,
  Routes,
} from "react-router-dom";
import RutaCarrito from "./Rutas/RutaCarrito";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Routes>

        <Route path='/' exact element={<Home />}/>
        <Route path='/carrito' element={<RutaCarrito/>}/>
        
      </Routes>

      <footer>
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
};

export default App;
