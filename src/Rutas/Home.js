import MainContainer from '../Componentes/Seccion info/MainContainer'
import BannerInfo from '../Componentes/Banner Info/BannerInfo'
import Tc from '../Componentes/info/tc'
import Slider from '../Componentes/Slider/Slider'


const Home = () => {
  return (
    <main style={s.main}>
        <MainContainer/>
        <BannerInfo/>
        <Tc/>
        <Slider/>
    </main>
  )
}

const s = {
    main: {
        overflowX:'hidden',
    }
}

export default Home