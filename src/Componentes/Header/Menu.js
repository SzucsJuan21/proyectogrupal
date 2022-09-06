import { useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuBtn from "./MenuBtn";
import useWindowSize from "../Utilidades/windowSize";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, useCycle } from "framer-motion";
import MenuDropdown from "./MenuDropdown";
import HeaderIconos from "./HeaderIconos";

const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { width } = useWindowSize();
  const [x, cycleX] = useCycle(-500, -70);
  const [op, cycleOp] = useCycle(0, 1);
  const closeMenu = () => {
    cycleX();
    cycleOp();
    setTimeout(() => {
      setShowMenu(false);
    }, 400);
  };

  return (
    <Wrapper>
      <HeaderIconos data={props.data} />
      <button
        style={{ all: "unset", cursor: "pointer", margin: "5px 0 0 15px" }}
        onClick={() => {
          setShowMenu(true);
          cycleX();
          cycleOp();
        }}
      >
        <GiHamburgerMenu size="50" />
      </button>

      {showMenu && (
        <motion.div
          style={{
            ...s.menuCont,
            width: width <= 480 ? "90%" : width <= 720 ? "50%" : "40%",
          }}
          initial={{ right: -500, opacity: 0 }}
          animate={{ right: x, opacity: op }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
          }}
        >
          <MenuTopCont>
            <div
              style={{
                margin: "20px 80px",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <button
                onClick={closeMenu}
                style={{ all: "unset", pointer: "cursor" }}
              >
                <IoClose size="30" />
              </button>
            </div>
            <div>
              <hr style={{ boxShadow: "0px 3px 15px 0.1px", width: "100%" }} />
            </div>
          </MenuTopCont>

          <MenuButtonsContainer>
            <MenuBtn texto="Inicio" path="/" closeMenu={closeMenu} />
            <MenuDropdown
              texto="Productos"
              closeMenu={closeMenu}
              botones={[
                { textoBtn: "Panadería", path: "/tienda/panaderia" },
                { textoBtn: "Pastelería", path: "/tienda/pasteleria" },
              ]}
            />
            <MenuDropdown
              texto="Box de Regalo"
              closeMenu={closeMenu}
              botones={[
                { textoBtn: "Team Dulce", path: "/" },
                { textoBtn: "Team Salado", path: "/" },
              ]}
            />
            <MenuBtn
              texto="Sobre Nosotros"
              path="/"
              closeMenu={closeMenu}
            />
          </MenuButtonsContainer>
        </motion.div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  overflow-x: hidden;
`;
const s = {
  menuCont: {
    position: "absolute",
    display: "grid",
    overflowX: "hidden",
    gridTemplateRows: "84px 1fr",
    top: 0,
    height: "100vh",
    backgroundColor: "rgb(240, 240, 240, 0.90)",
    boxShadow: "-1px -1px 10px",
  },
};

const MenuTopCont = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
`;

const MenuButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Menu;
