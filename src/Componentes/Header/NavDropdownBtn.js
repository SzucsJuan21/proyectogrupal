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
  width: 100%;
  padding: 10px 0;
  font-family: Poppins, sans-serif;
  &:hover {
    background-color: #e1e1e1;
  }
`;

export default NavDropdownBtn;
