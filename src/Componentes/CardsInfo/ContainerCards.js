import styled from "styled-components";
import Cards from "./CardsInfo";

const lista = [
  {
    h4: "SOMOS...",
    p: "Un equipo unido por años de amistad",
  },
  {
    h4: "CREEMOS...",
    p: "Que podemos brindarle sabores únicos a tu paladar ",
  },
  {
    h4: "ELABORAMOS...",
    p: "Los mejores productos con materia prima de calidad",
  },
  {
    h4: "QUEREMOS...",
    p: "Ser parte de tu experiencia",
  },
];

const ContainerCards = (props) => {
  return (
    <div style={s.mainContainer}>
      <h1 style={s.estilotitulo}>
        POR QUÉ ELEGIRNOS...
        {/* <span style={s.estilospan}>Premium Bakery</span> */}
      </h1>
      <CardsContainer>
        {lista.map((item) => (
          <Cards>
            <h4 style={{ fontSize: "22px", margin: 0 }}>{item.h4}</h4>
            <p style={{ fontSize: "18px", fontFamily: 'Poppins' }}>{item.p}</p>
          </Cards>
        ))}
      </CardsContainer>
    </div>
  );
};

export default ContainerCards;
const s = {
  mainContainer: {
    width: "100%",
    margin: "20px 0",
    display: "flex",
    flexDirection: 'column',
    alignItems:'center',
  },
  estilotitulo: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Crete Round, serif",
    letterSpacing: "2px",
    margin: '0 0 20px',
    alignItems: "center",
    textAlign:'center'
  },
  estilospan: {
    color: "#FF8126",
  },
  estilocontainer: {
    display: "grid",

    justifyContent: "space-evenly",
    width: "80%",
    overFlow: "hidden",
    fontFamily: "Crete Round, serif",
  },
};

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    
  }
`