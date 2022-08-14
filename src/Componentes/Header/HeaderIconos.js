import BotonIcono from "../Utilidades/BotonIcono"

const HeaderIconos = () => {
  return (
    <ul style={s.ul}>
        <li style={s.li}><BotonIcono icono='buscar.png' colorHover='invert(30%)' /></li>
        <li style={s.li}><BotonIcono icono='login.png' colorHover='invert(30%)' /></li>
        <li style={s.li}><BotonIcono icono='carrito.png' colorHover='invert(30%)' /></li>
    </ul>
  )
}

const s = {
    ul: {
        display: 'flex',
        justifyContet: 'space-evenly'
    },
    li: {
        listStyle: 'none',
        width: '50px',
        height: '50px',
    }
}

export default HeaderIconos