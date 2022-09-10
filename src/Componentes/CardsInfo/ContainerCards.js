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
    <div style={{width:'100%', margin:'20px 0'}}>
      <h1 style={s.estilotitulo}>
        Por qué elegir<pre> </pre>{" "}
        <span style={s.estilospan}>Premium Bakery</span>
      </h1>
      <div style={s.estilocontainer}>
        {lista.map((item) => (
          <Cards>
            <h4 style={{fontSize:'22px', margin:0}}>{item.h4}</h4>
            <p style={{fontSize:'16px'}}>{item.p}</p>
          </Cards>
        ))}
      </div>
    </div>
  );
};

export default ContainerCards;
const s = {
  estilotitulo: {
    display: "flex",
    justifyContent: "center",
    margin: 0,
    alignItems:'center'
  },
  estilospan: {
    color: "#FF8126",
  },
  estilocontainer: {
    display: "flex",
    justifyContent: "space-between",
    overFlow: "hidden",
  },
};
