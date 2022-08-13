import { useState } from "react"

// El boton se implementa con dos props:
// - color = [string con color]
// - texto = [string]
// 
// Ejemplo:
// <Boton color='##FF8126' texto='Hola' />


const Boton = (props) => {
    const [isHover, setisHover] = useState(false);

    return (
        <button
            onMouseEnter={() => {
                setisHover(true);
            }}
            onMouseLeave={() => {
                setisHover(false);
            }}
            style={{
                ...s.boton,
                backgroundColor: props.color,
                filter: isHover ? 'brightness(80%)' : ''
            }}>
            <span style={s.botonTxt}>
                {props.texto}
            </span>
        </button>
    )
}

const s = {
    boton: {
        border: '0',
        height: '2rem',
        borderRadius: '5px',
        minWidth: '150px',
        cursor: 'pointer',
    },
    botonTxt: {
        fontSize: '18px',
        color: '#fff',
        fontWeight: '500',
        margin: '0 20px 0 20px'
    }
}

export default Boton