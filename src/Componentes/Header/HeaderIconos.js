import BotonIcono from "../Utilidades/BotonIcono";
import { Link } from 'react-router-dom';

const HeaderIconos = () => {
  return (
    <div style={s.iconsContainer}>
      <li style={s.li}>
        <BotonIcono icono="buscar.png" colorHover="invert(30%)" />
      </li>
      <li style={s.li}>
        <BotonIcono icono="login.png" colorHover="invert(30%)" />
      </li>
      <li style={s.li}>
        <Link to='/carrito'>
          <BotonIcono icono="carrito.png" colorHover="invert(30%)" />
        </Link>
      </li>
    </div>
  );
};

const s = {
  iconsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: 'space-evenly'
  },
  li: {
    listStyle: "none",
    margin: '0px 10px 0 10px',
    width: "60px",
    height: "60px",
  },
};

export default HeaderIconos;
