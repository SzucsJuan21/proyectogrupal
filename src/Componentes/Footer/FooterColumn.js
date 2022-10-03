const FooterColumn = ({ info }) => {
  return (
    <div className="listaitem">
      <div>
        <h1 className="titulo-lista">{info.titulo}</h1>
        <ul className="item">
          {info.items.map((item,index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterColumn;
