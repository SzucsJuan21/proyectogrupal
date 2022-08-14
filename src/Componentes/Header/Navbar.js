import NavDropdown from "./NavDropdown"
import NavbarBtn from "./NavbarBtn"
const Navbar = () => {
  return (
    <div style={s.navbarContainer}>
        <ul style={s.ul}>
            <li style={s.item}><NavDropdown texto='Occasions' botones={[{ textoBtn: 'boton1' },{ textoBtn: 'boton2' },{ textoBtn: 'boton3' }]} /></li>
            <li style={s.item}><NavDropdown texto='All Categories' botones={[{ textoBtn: 'boton1' },{ textoBtn: 'boton2' },{ textoBtn: 'boton3' }]} /></li>
            <li style={s.item}><NavDropdown texto='Gifts &amp; Bundles' botones={[{ textoBtn: 'boton1' },{ textoBtn: 'boton2' },{ textoBtn: 'boton3' }]} /></li>
            <li style={s.item}><NavbarBtn texto='Our Brands' /></li>
            <li style={s.item}><NavbarBtn texto='About Us' /></li>
        </ul>
    </div>
  )
}

const s = {
    ul: {
        display: 'flex'
    },

    item: {
        listStyle: 'none',
    }
}

export default Navbar