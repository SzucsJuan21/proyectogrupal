import styled from "styled-components";

const Banner = (props) => {
  return (
    <div style={s.container}>
      <Title>
        <span>
          ¡BIENVENIDOS A{" "}
          <span style={{ color: "#ff8126" }}>PREMIUM BAKERY!</span>
        </span>
      </Title>

      <div style={s.containerimg}>
        <img
          style={s.img}
          src="https://raw.githubusercontent.com/SzucsJuan21/proyectogrupal/main/src/Componentes/Banner%20Imagen/BannerImg.png"
          alt="frutas"
        />
      </div>
    </div>
  );
};

export default Banner;
const s = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    width: "100%",
  },

  containerimg: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    overflow: "hidden",
    height: "230px",
    position: "absolute",
  },
  img: {
    position: "absolute",
    right: "-100px",
    width: "400px",
    height: "600px",
  },
  btn: {
    marginLeft: "75px",
  },
};

const Title = styled.h2`
  position: relative;
  font-size: 35px;
  font-family: "Crete Round", serif;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  width: 400px;
  height: 230px;
  margin: 0px auto;
  text-align: center;
  z-index: 1;
  text-shadow: -1px -1px 0 #F4F4F4, 1px -1px 0 #F4F4F4, -1px 1px 0 #F4F4F4, 1px 1px 0 #F4F4F4;
  @media (min-width: 780px) {
    text-align: start;
    align-items: center;
    margin: 0 100px;
  }
`;