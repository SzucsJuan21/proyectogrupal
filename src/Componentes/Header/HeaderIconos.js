import BotonIcono from "../Utilidades/BotonIcono";
import { Link } from 'react-router-dom';
import { useState } from "react";
import { BiCart, BiUser, BiSearchAlt2 } from "react-icons/bi";

const HeaderIconos = () => {
  const [isHover1, setIsHover1] = useState(false)
  const [isHover2, setIsHover2] = useState(false)
  const [isHover3, setIsHover3] = useState(false)

  return (
    <div style={s.iconsContainer}>
      <li style={s.li}>
        <Link to='/'>
          <BiSearchAlt2 size={60} color={isHover1 ? '#445' : '#000'} onMouseEnter={() => setIsHover1(true)} onMouseLeave={() => setIsHover1(false)} />
        </Link>
      </li>
      <li style={s.li}>
        <Link to='/'>
          <BiUser size={60} color={isHover2 ? '#445' : '#000'} onMouseEnter={() => setIsHover2(true)} onMouseLeave={() => setIsHover2(false)} />
        </Link>
      </li>
      <li style={s.li}>
        <Link to='/carrito'>
          <BiCart size={60} color={isHover3 ? '#445' : '#000'} onMouseEnter={() => setIsHover3(true)} onMouseLeave={() => setIsHover3(false)} />
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
