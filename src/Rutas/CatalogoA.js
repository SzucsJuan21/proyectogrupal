import Catalogo from "../Componentes/Catalogos/Catalogo"

const CatalogoA = (props) => {
  return (
    <div style={{width:'90%', margin:'auto'}}>
        <Catalogo data={props.data} dispatch={props.dispatch} category='panaderia'  />
    </div>
  )
}



export default CatalogoA