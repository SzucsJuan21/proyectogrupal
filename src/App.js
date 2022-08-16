import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import Header from "./Componentes/Header/Header";
import MainContainer from "./Componentes/Seccion info/MainContainer";
import BannerInfo from "./Componentes/Banner Info/BannerInfo";
function App() {
  return (
    <>
      <header style={s.header}>
          <Header />
      </header>

      <main style={s.main}>
        <MainContainer />
        <BannerInfo />
        <BannerRS />
      </main>
    </>
  );
}

const s = {
  header: {
    backgroundColor: "#fff",
    position: "fixed",
    top: '0'
  },

  main: {
    margin: '124px 0 0 0'
  }
};

export default App;
