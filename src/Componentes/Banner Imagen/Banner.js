import Boton from "../Utilidades/Boton"

const Banner = (props) => {
  return (
    <div style={s.container}>
        <div style={s.containertitle}>
          <h2 style={s.h1}>
            ¡BIENVENIDOS A PREMIUM BAKERY!
          </h2>
          {/* <p style={s.p}>
            Discover brands and theit stories
          </p> */}
          {/* <Boton style={s.btn}/> */}
        </div>
        <div style={s.containerimg}>
            <img style={s.img} src="https://www.anchoasdeluxe.com/upload/stblog/1/665/1069/6651069large.jpg" alt="frutas"/>
        
        </div>
    </div>     
        
        
        
  )
}

export default Banner
const s={
  container:{
    display:"grid",
    gridTemplateColumns:"50% 50%",
    backgroundColor:"#F4F4F4",
    width:"100%",
    height:"300px",

  },
  containertitle:{
    display:"flex",
    flexDirection:"column",
    marginTop:"2.5rem",
  },

  h1:{
    fontSize:"35px",
    fontFamily:'Crete Round, serif',
    letterSpacing: "2px",
    marginLeft:"75px",
    marginBotton:"0",
  },
  containerimg:{
    display:"flex",
    justifyContent:"flex-end",
  },
    img:{
    width:"575px",
  },
  btn:{
    marginLeft:"75px",

    }
  }




  