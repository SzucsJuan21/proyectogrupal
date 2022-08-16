import styled from "styled-components";
import { useState } from "react";
import MenuContainer from "./MenuContainer";

const Burger = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Wrapper>
      <button
        style={{ all: "unset", cursor: "pointer" }}
        onClick={() => setShowMenu(!showMenu)}
      >
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="13"></rect>
          <rect y="30" width="100" height="13"></rect>
          <rect y="60" width="100" height="13"></rect>
        </svg>
      </button>
      {showMenu && <MenuContainer></MenuContainer>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Burger;
