import styled from "styled-components";
import NavDropdown from "./NavDropdown";
import NavbarBtn from "./NavbarBtn";

const Navbar = () => {
  return (
    <div>
      <NavbarButtonsContainer>
        <NavbarButtons>
          <NavbarBtn texto='Inicio' path='/home' />
        </NavbarButtons>
        <NavbarButtons>
          <NavDropdown
            texto="Productos"
            botones={[
              { textoBtn: "Panadería", path: '/tienda/panaderia' },
              { textoBtn: "Pastelería", path: '/tienda/pasteleria' },
            ]}
          />
        </NavbarButtons>
        <NavbarButtons>
          <NavDropdown
            texto="Box de Regalo"
            botones={[
              { textoBtn: "Team Dulce", path: '/home' },
              { textoBtn: "Team Salado", path: '/home' },
            ]}
          />
        </NavbarButtons>
        <NavbarButtons>
          <NavbarBtn texto="Sobre Nosotros" path='/home' />
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
