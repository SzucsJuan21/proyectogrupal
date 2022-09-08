import { useState } from "react";
import styled from "styled-components";
import MenuBtn from "./MenuBtn";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const MenuDropdown = ({ texto, botones, closeMenu }) => {
  const [dropdown, setDropdown] = useState(false);
  const [h, cycleH] = useCycle(0, null);
  const [y, cycleY] = useCycle(50, 0);
  const [op, cycleOp] = useCycle(0, 1);

  return (
    <DropdownContainer>
      <Btn
        onClick={() => {
          !dropdown && setDropdown(true);
          cycleH();
          cycleY();
          cycleOp();
          dropdown &&
            setTimeout(() => {
              setDropdown(false);
            }, 100);
        }}
      >
        {texto} <Arrow></Arrow>
      </Btn>
      <AnimatePresence>
        {dropdown && (
          <motion.div
            style={{ margin: "0 25px", position: "relative", overflow:'hidden', border:'none' }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: null }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div>
              {botones.map((el, index) => (
                <MenuBtn
                  path={el.path}
                  texto={el.textoBtn}
                  key={index}
                  closeMenu={closeMenu}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  text-align: start;
  width: 100%;
  padding: 10px;
  margin: 0 0 10px 20px;
  border-radius: 10px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  transition: 100ms;
  &:hover {
    background-color: #ff8126;
    color: #fff;
    text-shadow: px 2px 10px black;
  }
`;

export default MenuDropdown;
