import { useState } from "react";

// props
// - icono = (facebook/instagram/twitter/whatsapp/messenger/telegram)
// - width = (tamaño)
// - height = (tamaño)
// Por ahora los iconos tienen un color fijo, eventualmente quiero encontrar una forma de cambiar los colores sin usar css filter


const IconoRedes = (props) => {
  const [isHover, setisHover] = useState(false);

  let icon = "";
  switch (props.icono) {
    case "facebook":
      icon = "https://cdn-icons.flaticon.com/png/512/4494/premium/4494464.png?token=exp=1660330871~hmac=53d6f68846da96c0ec9edcf2174daee5";
      break;
    case "instagram":
      icon = "https://cdn-icons.flaticon.com/png/512/4494/premium/4494468.png?token=exp=1660330871~hmac=b0373dbec0fcbe42976ae56d907bc0ae";
      break;
    case "twitter":
      icon = "https://cdn-icons.flaticon.com/png/512/4494/premium/4494465.png?token=exp=1660330871~hmac=52aac6396e40795b4345c9fcecfaf2f0";
      break;
    case "whatsapp":
      icon = "https://cdn-icons.flaticon.com/png/512/4494/premium/4494470.png?token=exp=1660330871~hmac=58bb6d96dcdb71b925262b1e13301e69";
      break;
    case "messenger":
      icon = "https://cdn-icons.flaticon.com/png/512/4494/premium/4494480.png?token=exp=1660330871~hmac=e8d815705cd33da4e21ac2662efc72bc";
      break;
    case "telegram":
      icon = "https://cdn-icons-png.flaticon.com/512/2111/2111710.png";
      break;
  }

  return (
    <a
      href="#"
      style={{
        filter: isHover
          ? "invert(51%) sepia(90%) saturate(1001%) hue-rotate(342deg) brightness(90%) contrast(101%)"
          : "invert(51%) sepia(90%) saturate(1001%) hue-rotate(342deg) brightness(103%) contrast(100%)",
      }}
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
    >
      <img src={icon} style={{ width:props.width, height:props.height }}></img>
    </a>
  );
};

export default IconoRedes;