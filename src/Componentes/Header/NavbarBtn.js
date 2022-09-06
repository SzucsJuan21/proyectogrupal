import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarBtn = (props) => {
  return (
    <div>
      <Link to={props.path} style={{textDecoration:'none'}} >
        <Btn>{props.texto}</Btn>
      </Link>
    </div>
  );
};

const Btn = styled.button`
  all: unset;
  color: #000;
  cursor: pointer;
  padding: 10px;
  font-family: Poppins, sans-serif;
  transition: 200ms;
  &:hover {
    text-shadow: 0.2px 0.2px 1px;
  }
`;
export default NavbarBtn;
