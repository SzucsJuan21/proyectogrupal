import Banner from "./Componentes/Banner Imagen/Banner";
import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import ContainerCards from "./Componentes/Cards/ContainerCards";
import Header from "./Componentes/Header/Header";
import Cards from "./Componentes/Cards/Cards";

function App() {
  const lista=[
    {
      h4:"Discover new flavours & people",
      p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      h4:"Discover new flavours & people",
      p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      h4:"Discover new flavours & people",
      p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      h4:"Discover new flavours & people",
      p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      h4:"Discover new flavours & people",
      p:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
  ]
  return (
    <>
      <header style={s.header}>
          <Header />
      </header>

      <main style={s.main}>
        <BannerRS />
      </main>
         <Banner/>
         <ContainerCards>
        {
          lista.map( item =>
           <Cards>
          <h4>{item.h4}</h4>
          <p>{item.p}</p>
          </Cards>
         )
        }
       </ContainerCards>
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
