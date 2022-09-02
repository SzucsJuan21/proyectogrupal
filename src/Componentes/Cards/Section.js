import React from "react";
import './Section.css'
import Cards from './Cards'
import budinlimon from "../Imagenes/budinlimon.jpg";
import chipa from "../Imagenes/chipa.jpg";
import pastafrola from "../Imagenes/pastafrola.jpg";
import tostado from "../Imagenes/tostado.jpg";
import Boton from "../Utilidades/Boton"

const data = [
  {
    src: budinlimon,
    title: "Budin de limón",
    txt: <p>$19.99</p>,
  },
  {
    src: chipa,
    title: "Chipá",
    txt: <p>$25.99</p>,
  },
  {
    src: pastafrola,
    title: "Pastafrola de membrillo",
    txt: <p>$30.99</p>,
  },
  {
    src: tostado,
    title: "Tostado jamón y queso",
    txt: <p>$15.99</p>,
  },

];

const Section = () => {
  return (
    <div className="cards-container">
      {data.map((item) => (
        <Cards>
          <img className="img-bakery"
            src={item.src}
            alt={item.title}
          />
          <figcaption className="card-fcaption">
            <div style={{ marginTop: '15px' }}>
              <h3 className="item-title">
                {item.title}
              </h3>
              <p className="valores">
                {item.txt}
              </p>
            </div>
            <div style={{ marginTop: '10px' }}>
              <Boton color="#FF8126" colorHover="#D96817" texto="Añadir al carro" />
            </div>

          </figcaption>
        </Cards>
      ))}
    </div>
  );
};

export default Section;
