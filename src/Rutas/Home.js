import MainContainer from '../Componentes/Seccion info/MainContainer'
import BannerInfo from '../Componentes/Banner Info/BannerInfo'
import Tc from '../Componentes/info/tc'
import Slider from '../Componentes/Slider/Slider'


const Home = () => {
  return (
    <div style={s.mainContainer}>
        <MainContainer/>
        <BannerInfo/>
        <Tc/>
        <Slider/>
    </div>
  )
}

const s = {
    mainContainer: {
        overflowX:'hidden',
    }
}

export default Home