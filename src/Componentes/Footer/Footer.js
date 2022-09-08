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
            items: ["21213", "21312312", "  12312312", "123"],
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
