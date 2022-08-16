import BotonIcono from "../Utilidades/BotonIcono";
import styled from "styled-components";

const BannerRS = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Tell a friend</Title>
      </TitleContainer>
      <IconContainer>
        <Icon>
          <BotonIcono icono="facebook.png" colorHover="invert(20%)" />
        </Icon>
        <Icon>
          <BotonIcono icono="instagram.png" colorHover="invert(20%)" />
        </Icon>
        <Icon>
          <BotonIcono icono="twitter.png" colorHover="invert(20%)" />
        </Icon>
        <Icon>
          <BotonIcono icono="messenger.png" colorHover="invert(20%)" />
        </Icon>
        <Icon>
          <BotonIcono icono="telegram.png" colorHover="invert(20%)" />
        </Icon>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #e1e1e1;
`;

const TitleContainer = styled.div`
  margin: 0;
`;

const Title = styled.h1`
  font-family: "Times New Roman", Times, serif;
  font-size: 44px;
`;

const IconContainer = styled.div`
  margin: 0 0px 20px 0px;
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  width: 25%;
  height: 25%;
  margin: 0.5rem;
  @media (min-width: 480px) {
    width: 22%;
    height: 22%;
  }
  @media (min-width: 780px) {
    width: 14%;
    height: 14%;
  }
  @media (min-width: 1260px) {
    width: 8%;
    height: 8%;
  }
`;

export default BannerRS;
