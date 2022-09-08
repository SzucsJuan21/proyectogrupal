import "../hojas-de-estilo/estilo.css";
import FooterColumn from "./FooterColumn";
import FooterIconColumn from "./FooterIconColumn";

const Footer = () => {
  return (
    <div className="caja">
      <div style={{display:'flex',justifyContent:'center'}}>
        <img
          className="imagen-logo"
          src="https://img.freepik.com/vector-premium/diseno-logo-panaderia_260747-396.jpg"
          width="240px"
          height="240px"
          alt="imagen-logo"
        />
      </div>
      <div className="contenedor-de-lista">
        <FooterColumn
          info={{
            titulo: "Navegación",
            items: ["Inicio", "Productos", "Box de regalo", "Sobre nosotros"],
          }}
        />

        <FooterIconColumn />

        <FooterColumn
          info={{
            titulo: "Contactános",
            items: ["+54 3846-267412", "premiumquality@bakery.com", "Av. Santa Fe 3253, 1091 CABA"],
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
