import { useState } from "react";
import styled, { keyframes } from "styled-components";

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
  const [isHover, setisHover] = useState(false);
  return (
    <DropdownContainer>
      <Btn
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
      >
        {props.texto} <Arrow></Arrow>
      </Btn>
      {isHover && (
        <DropdownMenu
          btns={props.botones.length}
          onMouseEnter={() => setisHover(true)}
          onMouseLeave={() => setisHover(false)}
        >
          <div>
          {props.botones.map((el, index) => (
            <NavDropdownBtn boton={el.textoBtn} key={index} />
          ))}
          </div>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Arrow = styled.i`
  border: solid black;
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg) translateY(-5px);
`;

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px;
  font-family: Poppins, sans-serif;
  transition: 200ms;
  &:hover {
    text-shadow: 0.2px 0.2px 1px;
  }
  ${DropdownContainer}:hover & {
    text-shadow: 0.2px 0.2px 1px;
  }
`;

const anim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const DropdownMenu = styled.div`
  border: 1px solid rgb(0, 0, 0, 0.2);
  background-color: #f9f9f9;
  border-radius: 2px;
  width: 200px;
  position: absolute;
  transition: 1s;
  box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.2);
  bottom: -115px;
  animation: ${anim} 400ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7px 0;
`;

export default NavDropdown;
