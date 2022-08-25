<<<<<<< HEAD
import Banner from "./Componentes/Banner Imagen/Banner";
=======
import './App.css'
>>>>>>> main
import BannerRS from "./Componentes/Banner Redes Sociales/BannerRS";
import ContainerCards from "./Componentes/Cards/ContainerCards";
import Header from "./Componentes/Header/Header";
<<<<<<< HEAD
import Cards from "./Componentes/Cards/Cards";
=======
import MainContainer from "./Componentes/Seccion info/MainContainer";
import BannerInfo from "./Componentes/Banner Info/BannerInfo";
import Slider from './Componentes/Slider/Slider';
>>>>>>> main

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
        <MainContainer />
        <BannerInfo />
        <Slider /> 
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
    top: "0",
    width: "100%",
    zIndex:'2',
  },

  main: {
    margin: "130px 0 0 0",
  },
};

export default App;
