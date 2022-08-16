import styled from "styled-components";

const NavbarBtn = (props) => {
  return (
    <div>
      <Btn>
        {props.texto}
      </Btn>
    </div>
  );
};

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  padding: 10px;
  font-family: Poppins, sans-serif;
  transition: 200ms;
  &:hover {
    text-shadow: 0.2px 0.2px 1px;
  }
`
export default NavbarBtn;
