


const ContainerCard = (props) => {
  return (
    <div>
      <h1 style={estilos.estilostitulo}>Why Choose<pre> </pre> <span style={estilos.estilospan}>  the Premium Bakery Quality</span></h1> 
      <div style={estilos.estilocontainer}>
       {props.children}
      </div>
    </div>
  )
}

export default ContainerCard

const estilos={
    
  estilostitulo:{
    display:"flex",
    justifyContent:"center",
    marginTop:"50px",
  },
  estilospan:{
    color:"#FF8126",
  },
  estilocontainer:{
    display:"flex",
    justifyContent:"space-Around",
    overflow:"hidden",


  }
}