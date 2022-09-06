import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuBtn = (props) => {
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
  text-align: start;
  margin: 0 0 10px 20px;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  font-family: Poppins, sans-serif;
  font-weight: bold;
  transition: 100ms;
  &:hover {
    background-color: #ff8126;
    color: #fff;
    text-shadow: px 2px 10px black;
  }
`;

export default MenuBtn;
