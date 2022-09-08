import React from "react";
import useWindowSize from "../Utilidades/windowSize";
import HeaderIconos from "./HeaderIconos";
import Navbar from "./Navbar";
import styled from "styled-components";
import Menu from "./Menu";
import Notificacion from "./Notificacion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = (props) => {
  const { width } = useWindowSize();
  const [isSearchBar, setIsSearchBar] = useState(false);

  return (
    <>
      <Notificacion></Notificacion>
      <Container>
        <AnimatePresence>
          {isSearchBar && (
            <motion.div
              style={{
                ...s.inputWrapper,
                width: `${width * 0.8}px`,
                left: width < 660 ? "20px" : "150px",
              }}
              initial={{ width: 0 }}
              animate={{ width: null }}
              exit={{ width: 0 }}
              transition={{ type: "tween", duration: 0.8 }}
            >
              <input
                type="text"
                placeholder="Buscar..."
                style={{
                  ...s.input,
                  width: `${width * 0.4}px`,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Img isSearchBar={isSearchBar} screenWidth={width}>
          <Link to="/">
            <img
              src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png"
              width="100%"
              height="100%"
              alt=""
            />
          </Link>
        </Img>

        {width > 1279 && (
          <NavContainer>
            <motion.div
              style={{ display: "flex", alignItems: "center" }}
              animate={{
                opacity: isSearchBar ? [1, 0, 0] : 1,
                visibility: isSearchBar
                  ? ["visible", "visible", "hidden"]
                  : "visible",
              }}
              transition={{ duration: 0.8, times: [0, 0.2, 1] }}
            >
              <Navbar />
            </motion.div>

            <IconsWrapper>
              <HeaderIconos
                data={props.data}
                setIsSearchBar={setIsSearchBar}
                isSearchBar={isSearchBar}
              />
            </IconsWrapper>
          </NavContainer>
        )}

        {width < 1280 && (
          <Menu
            data={props.data}
            setIsSearchBar={setIsSearchBar}
            isSearchBar={isSearchBar}
          />
        )}
      </Container>
    </>
  );
};

const s = {
  inputWrapper: {
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
    height: "40px",
    overflow: "hidden",
  },
  input: {
    height: "30px",
    borderRadius: "15px",
    fontFamily: "Poppins",
    fontSize: "18px",
  },
};

const Img = styled.div`
  width: 80px;
  height: 70px;
  visibility: ${(props) =>
    props.screenWidth > 660 || (!props.isSearchBar && props.screenWidth < 659)
      ? "visible"
      : "hidden"};
  @media (min-width: 780px) {
    width: 130px;
    height: 100px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 40px 0 0;
  box-shadow: 0px 4px 20px 0px rgb(0, 0, 0, 0.2);
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
