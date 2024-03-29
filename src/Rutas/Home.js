import MainContainer from "../Componentes/Home/Seccion info/MainContainer";
import BannerInfo from "../Componentes/Home/Banner Info/BannerInfo";
import Banner from "../Componentes/Home/Banner Imagen/Banner";
import Tc from "../Componentes/Home/info/tc";
import Slider from "../Componentes/Home/Slider/Slider";
import Section from "../Componentes/Catalogos/Cards/Section";
import { motion } from "framer-motion";
import styled from "styled-components";
import ContainerCards from "../Componentes/Home/CardsInfo/ContainerCards";

const Home = () => {
  return (
    <motion.div
      style={s.mainContainer}
      initial={{ left: -1000, opacity: 0 }}
      animate={{ left: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Banner />
      <Section1>
        <Section/>
        <ContainerCards />
        <MainContainer />
      </Section1>

      <BannerInfo />
      <Tc />
      <Slider />
    </motion.div>
  );
};

const s = {
  mainContainer: {
    overflowX: "hidden",
    position: "relative",
    margin: "auto",
  },
};

const Section1 = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 780px) {
    margin: 0 50px;
  }

  @media (min-width: 1280px) {
    margin: 0 100px;
  }
`;

export default Home;
