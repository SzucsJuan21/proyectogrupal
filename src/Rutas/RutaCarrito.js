import Carrito from "../Componentes/Carrito/Carrito"

const RutaCarrito = (props) => {
  return (
    <div>
        <Carrito data={props.data} dispatch={props.dispatch}/>
    </div>
  )
}

export default RutaCarrito