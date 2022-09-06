const Cards = (props) => {
    return (
      <div>
          <figure style={s.estilofig}>
              <div style={s.estiloicon}><ion-icon name="telescope-outline"></ion-icon></div>
              {props.children}
          </figure>
      </div>
    )
  }
  
  export default Cards
  const s={
      estilofig:{
          heigth:"100px",
          width:"100px",
          marginTop:"50px",
      },
      estiloicon:{
          marginLeft:"1rem",
          fontSize:"1.5rem",
      },
  }