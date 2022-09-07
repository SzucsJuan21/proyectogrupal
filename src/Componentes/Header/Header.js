import React from "react";
import useWindowSize from "../Utilidades/windowSize";
import HeaderIconos from "./HeaderIconos";
import Navbar from "./Navbar";
import styled from "styled-components";
import Menu from "./Menu";
import Notificacion from "./Notificacion";
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Notificacion></Notificacion>
      <Container>
        <Img>
          <Link to='/' >
            <img
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              width='100%'
              height='100%'
              alt=""
            />
          </Link>
        </Img>

        {width > 1279 && (
          <NavContainer>
            <NavbarWrapper>
              <Navbar />
            </NavbarWrapper>
            <IconsWrapper>
              <HeaderIconos data={props.data} />
            </IconsWrapper>
          </NavContainer>
        )}
        {width < 1280 && <Menu data={props.data}/>}
      </Container>
    </>

  );
};

const Img = styled.div`
  width: 80px;
  height: 70px;
  @media (min-width: 780px) {
    width: 130px;
    height: 100px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 40px 0 0;
  box-shadow: 0px 4px 20px 0px rgb(0,0,0,0.2);
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: 160px 1fr;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
`;

export default Header;
