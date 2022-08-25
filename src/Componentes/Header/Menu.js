import { useState } from "react";
import styled, { keyframes } from "styled-components";
import MenuBtn from "./MenuBtn";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      
      <button
        style={{ all: "unset", cursor: "pointer" }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <GiHamburgerMenu size="40" />
      </button>

      <MenuCont style={{ right: showMenu ? "0" : "-100%" }}>

        <MenuTopCont>
          <div
            style={{ margin: "20px", display: "flex", justifyContent: "end" }}
          >
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{ all: "unset", pointer: "cursor" }}
            >
              <IoClose size="30" />
            </button>
          </div>
          <div>
            <hr style={{ boxShadow: "0px 3px 15px 0.1px", width: "100%" }} />
          </div>
        </MenuTopCont>

        <div>
          <MenuBtn texto="Occasions" />
          <MenuBtn texto="All Categories" />
          <MenuBtn texto="Gifts &amp; Bundles" />
          <MenuBtn texto="Our Brand" />
          <MenuBtn texto="About Us" />
        </div>

      </MenuCont>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
`;

const MenuCont = styled.div`
  position: absolute;
  display: grid;
  grid-template-rows: 84px 1fr;
  top: 0;
  height: 100vh;
  width: 80%;
  background-color: rgb(240, 240, 240, 0.90);
  box-shadow: -1px -1px 10px;
  transition: 400ms;
  @media (min-width: 480px) {
    width: 50%;
  }
  @media (min-width: 720px) {
    width: 40%;
  }
`;

const MenuTopCont = styled.div`
  width: 100%;
  background-color: rgb(240, 240, 240);
  display: flex;
  flex-direction: column;
`;


export default Burger;
