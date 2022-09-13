

const Cards = (props) => {
return (
    <div>
        <figure style={estilos.estilofig}>
            <div style={estilos.estiloicon}><ion-icon name="telescope-outline"></ion-icon></div>
            {props.children}
        </figure>
    </div>
)
}

export default Cards
const estilos={
    estilotitulo:{
        display:"flex",
        justifyContent:"center",
    },
    estilospan:{
        color:"#FF8126",
    },
    estilofig:{
        heigth:"100px",
        width:"100px",
        marginTop:"50px",
    },
    estilop:{
        fontSize:"14px",
    },
    estiloicon:{
        marginLeft:"1rem",
        fontSize:"1.5rem",
    }

}