import Catalogo from "../Componentes/Catalogos/Catalogo";

const CatalogoA = (props) => {
  return (
    <div style={{ width: "90%", margin: "140px auto" }}>
      <Catalogo
        data={props.data}
        dispatch={props.dispatch}
        status={props.status}
        category="panaderia"
      />
    </div>
  );
};

export default CatalogoA;
