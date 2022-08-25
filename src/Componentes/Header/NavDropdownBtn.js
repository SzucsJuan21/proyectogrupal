import styled from "styled-components";

const NavDropdownBtn = (props) => {
  return (
    <div>
      <Btn
        onMouseDown={() => {
          console.log("TEST");
        }}
      >
        {props.boton}
      </Btn>
    </div>
  );
};

const Btn = styled.button`
  all: unset;
  text-align: center;
  width: 180px;
  height: 35px;
  margin: 0px;
  font-family: Poppins, sans-serif;
  border-radius: 10px;
  transition: 200ms;
  &:hover {
    background-color: #ff8126;
    color: #fff;
  }
`;

export default NavDropdownBtn;