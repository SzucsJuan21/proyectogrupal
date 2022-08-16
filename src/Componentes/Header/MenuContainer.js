import styled, { keyframes } from "styled-components";
import NavDropdownBtn from "./NavDropdownBtn";

const MenuContainer = () => {
  return (
    <MenuCont>
      <h1 style={{ marginLeft: "20px" }}> Menu</h1>
      <hr />
      <NavDropdownBtn boton="Occasions"></NavDropdownBtn>
      <NavDropdownBtn boton="All Categories"></NavDropdownBtn>
      <NavDropdownBtn boton="Gifts &amp; Bundles"></NavDropdownBtn>
      <NavDropdownBtn boton="Our Brands"></NavDropdownBtn>
      <NavDropdownBtn boton="About Us"></NavDropdownBtn>
    </MenuCont>
  );
};

const menuAnimShow = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const MenuCont = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  background-color: #b9b9b9;
  box-shadow: -1px -1px 10px;
  animation: ${menuAnimShow} 400ms linear;
  @media (min-width: 480px) {
    width: 60%;
  }
  @media (min-width: 720px) {
    width: 40%;
  }
`;

const Arrow = styled.i`
  border: solid black;
  border-width: 0 1.5px 1.5px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg) translateY(-5px);
`;

export default MenuContainer;
