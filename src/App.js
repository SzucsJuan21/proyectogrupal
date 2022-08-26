import "./App.css";
import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import Header from "./Componentes/Header/Header";
import MainContainer from "./Componentes/Seccion info/MainContainer";
import BannerInfo from "./Componentes/Banner Info/BannerInfo";
import Slider from "./Componentes/Slider/Slider";
import Tc from "./Componentes/info/tc";
import Itemlista from "./Componentes/Footer/item";

function App() {
  return (
    <>
      <header style={s.header}>
        <Header />
      </header>

      <main style={s.main}>
        <MainContainer />
        <BannerInfo />
        <Tc />
        <Slider />
        <BannerRS />
        <Itemlista />
      </main>
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
    margin: "130px 0 0 0",
  },
};

export default App;
