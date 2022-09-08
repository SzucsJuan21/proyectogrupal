import Cards from "./CardsInfo";

const lista = [
  {
    h4: "Discover new flavours & people",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    h4: "Discover new flavours & people",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    h4: "Discover new flavours & people",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    h4: "Discover new flavours & people",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    h4: "Discover new flavours & people",
    p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const ContainerCards = (props) => {
  return (
    <div style={{width:'100%', margin:'20px 0'}}>
      <h1 style={s.estilotitulo}>
        Why Choose<pre> </pre>{" "}
        <span style={s.estilospan}>the premium Quality</span>
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
