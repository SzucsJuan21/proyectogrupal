import "../hojas-de-estilo/estilo.css"

const ItemLista = () => {
  return (
    <div className="caja">
      <div className="contenedor-de-lista">
        <div>
          <img className="imagen-logo"
            src='https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-2.png'
            width="170px"
            height="130px"
            alt="imagen-logo" />
        </div>

        <div className="listaitem">
          <h1 className="titulo-lista">Occasions</h1>
          <br></br>
          <br></br>
          <ul className="item">
            <li >Occasions</li>
            <li >All Products</li>
            <li >Working From Home</li>
            <li >Snack Time</li>
            <li >Breakfast</li>
            <li >Vegan Life</li>
            <li >Baking</li>
            <li >Baking</li>
            <li >Gifts &amp; Bundles</li>
            <li >Easy Cooking</li>
          </ul>
        </div>

        <div className="listaitem" >
          <h1 className="titulo-lista">All Categories</h1>
          <br></br>
          <br></br>
          <ul className="item">
            <li >Baking</li>
            <li >Breakfast</li>
            <li >Condiments</li>
            <li >Drinks</li>
            <li>Heat Things Up</li>
            <li>Meal Solutions</li>
            <li>Pantry Staples</li>
            <li>Simmer Sauces</li>
            <li>Snacks &amp; Treats</li>
            <li>Spice Up Your Cooking</li>
            <li>Sweet Tooth</li>
            <li>Wine &amp; Cheese</li>
            <li>All Products</li>
          </ul>
        </div>

        <div className="listaitem" >
          <h1 className="titulo-lista">Gifts &amp; Bundles</h1>
          <br></br>
          <br></br>

          <ul className="item">
            <li>Sweet Tooth Special</li>
            <li>Discover Local</li>
            <li>Baking Box</li>
            <li>Spicy Heat Lover's Box</li>
            <li>Snacking Sensations</li>
          </ul>
        </div>

        <div className="listaitem" >
          <h1 className="titulo-lista">Our Brands</h1>
        </div>

        <div className="listaitem" >
          <h1 className="titulo-lista">About Us</h1>
        </div>
      </div>
    </div>
  )
}

export default ItemLista;



