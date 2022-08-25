import React from "react";
import './Section.css'
import Cards from './Cards'
import pizza from "../Imagenes/pizza.jpg";
import pancakes from "../Imagenes/pancakes.jpg";
import hamburguesa from "../Imagenes/hamburguesa.jpg";
import helado from "../Imagenes/helado.jpg";

const data = [
  {
    src: pizza,
    title: "Pepperoni Pizza",
    txt: <p>$19.99</p>,
  },
  {
    src: pancakes,
    title: "Pancakes",
    txt: <p>$25.99</p>,
  },
  {
    src: hamburguesa,
    title: "Hamburguer",
    txt: <p>$30.99</p>,
  },
  {
    src: helado,
    title: "Ice Cream",
    txt: <p>$15.99</p>,
  },
  
];

const Section = () => {
  return (
    <div>
      {data.map((item) => (
        <Cards>
          <img
            src={item.src}
            alt={item.title}
          />
          <figcaption>
            <h3>
              {item.title}
            </h3>
            <p>
              {item.txt}
            </p>
          </figcaption>
        </Cards>
      ))}
    </div>

  );
};

export default Section;
