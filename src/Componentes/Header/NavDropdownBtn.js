import styled from "styled-components";
import { Link } from "react-router-dom";

const NavDropdownBtn = (props) => {
  return (
    <div>
      <Link to={props.path} style={{textDecoration:'none'}}>
        <Btn>{props.textoBtn}</Btn>
      </Link>
    </div>
  );
};

const Btn = styled.button`
  all: unset;
  color: #000;
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
