import { useState } from "react";

const NavbarBtn = (props) => {
const [isHover, setIsHover] = useState(false)

  return (
    <div>
      <button
        style={{...s.btn, textShadow: isHover ? '0.4px 0.4px black' : ''}}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {props.texto} <i style={s.arrow}></i>
      </button>
    </div>
  );
};

const s = {
    btn: {
        all: "unset",
        cursor: "pointer",
        padding: "10px",
        fontFamily: "Poppins, sans-serif",
        transition: '200ms',
      },
}

export default NavbarBtn;
