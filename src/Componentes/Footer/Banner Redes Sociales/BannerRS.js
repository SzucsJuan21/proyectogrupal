import styled from "styled-components";
import { IoLogoFacebook } from "react-icons/io5";
import { RiMessengerFill, RiWhatsappFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri'


const BannerRS = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Cuéntale a tus amigos</Title>
      </TitleContainer>
      <IconContainer>
        <Icon>
          <RiWhatsappFill size={'100%'}/>
        </Icon>
        <Icon>
          <RiMessengerFill size={'100%'}/>
        </Icon>
        <Icon>
          <IoLogoFacebook size={'100%'}/>
        </Icon>
        <Icon>
          <RiInstagramFill size={'100%'}/>
        </Icon>
        <Icon>
        <RiTwitterFill size={'100%'}/>
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
  font-family: 'Crete Round', serif;
  font-size: 42px;
  text-align: center;
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
  @media (min-width: 768px) {
    width: 14%;
    height: 14%;
  }
  @media (min-width: 1260px) {
    width: 8%;
    height: 8%;
  }
`;

export default BannerRS;
