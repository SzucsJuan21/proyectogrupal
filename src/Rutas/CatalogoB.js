import Catalogo from "../Componentes/Catalogos/Catalogo";

const CatalogoA = (props) => {
  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <Catalogo
        data={props.data}
        dispatch={props.dispatch}
        status={props.status}
        category="pasteleria"
      />
    </div>
  );
};

export default CatalogoA;
