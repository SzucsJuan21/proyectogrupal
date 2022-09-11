import styled from "styled-components";

// El boton se implementa con dos props:
// - color = [string con color]
// - colorHover = [string con color]
// - texto = [string]
//
// Ejemplo:
// <Boton color="red" colorHover="blue" texto="hola" />


const Boton = (props) => {
  return (
    <Btn color={props.color} colorHover={props.colorHover}>
      {props.texto}
    </Btn>
  );
};

const Btn = styled.button`
  border: 0;
  height: 2rem;
  width: 100%;
  border-radius: 5px;
  min-width: 150px;
  cursor: pointer;
  background-color: ${props => props.color};
  transition: 200ms;
  font-size: 18px;
 color: #fff;
 font-weight: 500;
  &:hover {
    background-color: ${props => props.colorHover};;
  }
`;

export default Boton;
