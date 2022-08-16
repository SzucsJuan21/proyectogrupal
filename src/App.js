import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import Header from "./Componentes/Header/Header";

function App() {
  return (
    <>
      <header style={s.header}>
          <Header />
      </header>

      <main style={s.main}>
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
