import IconoRedes from "../Utilidades/IconosRedes"

const BannerRS = () => {
  return (
    <div style={s.container}>
        <div style={s.titleContainer}>
            <h1>Tell a friend</h1>
        </div>
        <div style={s.iconContainer}>
            <IconoRedes icono='facebook' width='80px' height='80px' />
            <IconoRedes icono='instagram' width='80px' height='80px' />
            <IconoRedes icono='twitter' width='80px' height='80px' />
            <IconoRedes icono='whatsapp' width='80px' height='80px' />
            <IconoRedes icono='messenger' width='80px' height='80px' />
            <IconoRedes icono='telegram' width='80px' height='80px' />
        </div>
    </div>
  )
}

const s = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#bbb',
        padding: '3rem',
    },

    titleContainer: {
        margin: '0',
    },

    iconContainer: {
        margin: '0 20px 20px 20px',
        width: '40%',
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}

export default BannerRS