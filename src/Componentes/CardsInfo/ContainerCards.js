

const ContainerCards = (props) => {
  return (
    <div>
        <h1 style={s.estilotitulo}>Why Choose<pre> </pre> <span style={s.estilospan}>the premium Quality</span></h1>
        <div style={s.estilocontainer}>
            {props.children}
        </div>
    </div>
  )
}

export default ContainerCards
const s={
    estilotitulo:{
        display:"flex",
        justifyContent:"center",
        marginTop:"50px",
    },
    estilospan:{
        color:"#FF8126",
    },
    estilocontainer:{
        display:"flex",
        justifyContent:"space-around",
        overFlow:"hidden",


    }
}