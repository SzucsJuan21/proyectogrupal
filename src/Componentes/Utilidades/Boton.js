import styled, { createGlobalStyle } from "styled-components";

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
      <BotonTxt>{props.texto}</BotonTxt>
    </Btn>
  );
};

const Btn = styled.button`
  border: 0;
  height: 2rem;
  border-radius: 5px;
  min-width: 150px;
  cursor: pointer;
  background-color: ${props => props.color};
  transition: 200ms;
  &:hover {
    background-color: ${props => props.colorHover};;
  }
`;
const BotonTxt = styled.span`
 font-size: 18px;
 color: #fff;
 font-weight: 500;
 margin: 0 20px;
 transition: 200ms;
`

export default Boton;
