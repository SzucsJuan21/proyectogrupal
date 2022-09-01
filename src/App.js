import "./App.css";
import Header from "./Componentes/Header/Header";
import Itemlista from "./Componentes/Footer/item";
import Home from "./Rutas/Home";
import RutaCarrito from "./Rutas/RutaCarrito";
import {
  Route,
  Routes,
} from "react-router-dom";


function App() {
 

  return (
    <>
      <header style={s.header}>
        <Header />
      </header>

      <main style={s.main}>
        <Routes>

          <Route path='/' exact element={<Home />} />
          <Route path='/carrito' element={<RutaCarrito />} />

        </Routes>
      </main>

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
  main: {
    margin: '140px 0',
  },
};

export default App;
