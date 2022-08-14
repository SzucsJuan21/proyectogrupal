import { useState } from "react";

// props
// - icono = (string con el nombre de una imagen que este en /Iconos)
// - color = (css filter)
// - colorHover = (css filter)
// El color necesita ser un filter de css, aca dejo un conversor de color hexadecimal a filter: https://codepen.io/sosuke/pen/Pjoqqp
//
// Por ejemplo, esto seria un icono de facebook de color rojo que cambia a azul con el cursor arriba:
// <BotonIcono 
//    icono='facebook.png' 
//    color='invert(13%) sepia(99%) saturate(6508%) hue-rotate(4deg) brightness(99%) contrast(116%)'
//    colorHover='invert(8%) sepia(100%) saturate(6066%) hue-rotate(246deg) brightness(103%) contrast(147%);'
//  />


const BotonIcono = (props) => {
  const [isHover, setisHover] = useState(false);

  return (
    <a
      href="#"
      style={{
        filter: isHover
          ? props.colorHover
          : props.color,
        transition: '200ms'
      }}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img
        src={require(`./Iconos/${props.icono}`)}
        style={{ width: "100%", height: "100%" }}
      ></img>
    </a>
  );
};

export default BotonIcono;
