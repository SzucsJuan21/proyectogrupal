import styled from "styled-components";
import NavDropdown from "./NavDropdown";
import NavbarBtn from "./NavbarBtn";
import useWindowSize from "../Utilidades/windowSize";

const Navbar = () => {
  return (
    <div>
      <NavbarButtonsContainer>
        <NavbarButtons>
          <NavDropdown
            texto="Occasions"
            botones={[
              { textoBtn: "boton1" },
              { textoBtn: "boton2" },
              { textoBtn: "boton3" },
            ]}
          />
        </NavbarButtons>
        <NavbarButtons>
          <NavDropdown
            texto="All Categories"
            botones={[
              { textoBtn: "boton1" },
              { textoBtn: "boton2" },
              { textoBtn: "boton3" },
            ]}
          />
        </NavbarButtons>
        <NavbarButtons>
          <NavDropdown
            texto="Gifts &amp; Bundles"
            botones={[
              { textoBtn: "boton1" },
              { textoBtn: "boton2" },
              { textoBtn: "boton3" },
            ]}
          />
        </NavbarButtons>
        <NavbarButtons>
          <NavbarBtn texto="Our Brands" />
        </NavbarButtons>
        <NavbarButtons>
          <NavbarBtn texto="About Us" />
        </NavbarButtons>
      </NavbarButtonsContainer>
    </div>
  );
};

const NavbarButtonsContainer = styled.ul`
  display: flex;
`;
const NavbarButtons = styled.li`
  list-style: none;
  margin: 0 10px;
`;

export default Navbar;
