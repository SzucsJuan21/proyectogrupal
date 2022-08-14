import BotonIcono from "../Utilidades/BotonIcono";

const BannerRS = () => {
  return (
    <div style={s.container}>
      <div style={s.titleContainer}>
        <h1>Tell a friend</h1>
      </div>
      <div style={s.iconContainer}>
        <div style={s.icon}>
          <BotonIcono icono="facebook.png" colorHover='invert(20%)' />
        </div>
        <div style={s.icon}>
          <BotonIcono icono="instagram.png" colorHover='invert(20%)' />
        </div>
        <div style={s.icon}>
          <BotonIcono icono="twitter.png" colorHover='invert(20%)' />
        </div>
        <div style={s.icon}>
          <BotonIcono icono="messenger.png" colorHover='invert(20%)' />
        </div>
        <div style={s.icon}>
          <BotonIcono icono="telegram.png" colorHover='invert(20%)' />
        </div>
      </div>
    </div>
  );
};

const s = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#e1e1e1",
    padding: "3rem",
  },

  titleContainer: {
    margin: "0",
  },

  iconContainer: {
    margin: "0 20px 20px 20px",
    width: "50%",
    display: "flex",
    justifyContent: "space-evenly",
  },

  icon: {
    width: "80px",
    height: "80px",
  },
};

export default BannerRS;
