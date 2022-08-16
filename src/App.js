import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import Header from "./Componentes/Header/Header";
import styled from "styled-components";
const Contenedor1 = styled.div`
  background-color: red;
  width: 500px;
  height: 500px;
`;
console.log(styled)

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
    top: "0",
  },

  main: {
    margin: "124px 0 0 0",
  },
};

export default App;
