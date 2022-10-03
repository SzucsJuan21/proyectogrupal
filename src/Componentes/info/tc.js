import "../hojas-de-estilo/tc.css";

function Tc() {
  return (
    <div className="componentes-tc">
      <div className="imagen-tc">
        <img
          className="imagen-tc"
          src={require("./box-salada.webp")}
          alt="imagen-tc"
        />
      </div>

      <div className="contenedor-tc">
        <div>
          <h1 className="titulo-tc">¡SORPRENDE!</h1>
          <p className="texto-tc">
            Tenés algún familiar, amigo/a o pareja a quién te gustaría
            sorprender? ¡Nosotros tenemos la solución! Te ofrecemos las box más originales
            para que puedas alegrarle el día a esa persona especial. Y lo mejor
            de todo, te lo llevamos a la puerta de tu casa!
          </p>
        </div>
      </div>
    </div>
  );
}
export default Tc;
