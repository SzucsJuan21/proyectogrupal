import { useState } from "react";

// props
// - icono = (facebook/instagram/twitter/whatsapp/messenger/telegram)
// - width = (tamaño)
// - height = (tamaño)
// Por ahora los iconos tienen un color fijo, eventualmente quiero encontrar una forma de cambiar los colores sin usar css filter

const IconoRedes = (props) => {
  const [isHover, setisHover] = useState(false);

  return (
    <a
      href="#"
      style={{
        filter: isHover
          ? "invert(51%) sepia(90%) saturate(1001%) hue-rotate(342deg) brightness(90%) contrast(101%)"
          : "invert(51%) sepia(90%) saturate(1001%) hue-rotate(342deg) brightness(103%) contrast(101%)",
      }}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        src={require(`../Utilidades/Iconos/${props.icono}.png`)}
        style={{ width: "100%", height: "100%" }}
      ></img>
    </a>
  );
};

export default IconoRedes;
