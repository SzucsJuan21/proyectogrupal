import { SiAmericanexpress, SiVisa, SiMastercard } from "react-icons/si";

const FooterIconColumn = () => {
  return (
    <div className="listaitem">
      <div>
        <h1 className="titulo-lista">Medios de pago</h1>
        <ul className="item-iconos">
          <li><SiVisa size={40}/></li>
          <li><SiMastercard size={40}/></li>
          <li><SiAmericanexpress size={40}/></li>
          <li><img src="https://files.kuder.com.ar/images/kuder-mercadopago-blanco-negro.png" alt="" width='40px' height='40px' /></li>
        </ul>
      </div>
    </div>
  )
}

export default FooterIconColumn