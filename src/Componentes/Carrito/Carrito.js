import styled from "styled-components"

const Carrito = () => {
  return (
    <MainContainer>
        <h1>CARRITO DE COMPRAS</h1>
        <div style={{width:'80%', border:'3px solid black',height:'300px'}}></div>
    </MainContainer>
  )
}

const MainContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export default Carrito