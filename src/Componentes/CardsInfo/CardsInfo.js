const Cards = (props) => {
    return (
        <figure style={s.estilofig}>
            <div style={s.estiloicon}><ion-icon name="telescope-outline"></ion-icon></div>
            {props.children}
        </figure>
    )
}

export default Cards
const s={
    estilofig:{
    },
    estiloicon:{
        marginLeft:"1rem",
        fontSize:"1.5rem",
    },
}