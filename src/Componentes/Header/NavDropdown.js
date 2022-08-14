import { useState } from "react";
import NavDropdownBtn from "./NavDropdownBtn";

// Boton dropdown para la barra de navegación
// props:
// - texto = (string)
// - botones = (array)   usa un array de objetos, cada objeto es un boton del menu y debe tener un string en la propiedad "textoBtn"
//
// Ejemplo:
// <NavDropdownBtn texto='boton' botones=[{ textoBtn: 'boton1' },{ textoBtn: 'boton2' },{ textoBtn: 'boton3' }] />
// Eventualmente se podria hacer que cada objeto acepte una funcion en una nueva propiedad en esos objetos

const NavDropdown = (props) => {
  const [isHover, setIsHover] = useState(false);
  const dropdownAnim = {
    bottom: isHover ? "-125px" : "10000px",
    opacity: isHover ? "1" : "0",
  };

  return (
    <div style={s.dropdownContainer}>
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
      <div
        style={{ ...s.dropdownMenu, ...dropdownAnim }}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        {props.botones.map((el) => (
          <NavDropdownBtn boton={el.textoBtn} />
        ))}
      </div>
    </div>
  );
};

const s = {
  dropdownContainer: {
    position: "relative",
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  },

  btn: {
    all: "unset",
    cursor: "pointer",
    padding: "10px",
    fontFamily: "Poppins, sans-serif",
    transition: '200ms',
  },

  arrow: {
    border: "solid black",
    borderWidth: "0 1.5px 1.5px 0",
    display: "inline-block",
    padding: "3px",
    transform: "rotate(45deg) translateY(-5px)",
  },

  dropdownMenu: {
    border: "1px solid rgb(0,0,0,0.2) ",
    backgroundColor: "#f9f9f9",
    borderRadius: "2px",
    width: "200px",
    position: "absolute",
    transition: "opacity 200ms",
    boxShadow: "5px 5px 10px rgb(0,0,0,0.2)",
  },
};

export default NavDropdown;
