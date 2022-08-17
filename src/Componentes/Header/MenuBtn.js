import styled from "styled-components";

const MenuBtn = (props) => {
  return (
    <div>
      <Btn>{props.texto}</Btn>
    </div>
  );
};

const Btn = styled.button`
  all: unset;
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
