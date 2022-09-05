import MainContainer from '../Componentes/Seccion info/MainContainer'
import BannerInfo from '../Componentes/Banner Info/BannerInfo'
import Tc from '../Componentes/info/tc'
import Slider from '../Componentes/Slider/Slider'
import Section from '../Componentes/Cards/Section'


const Home = (props) => {

  return (
    <div style={s.mainContainer}>
        <MainContainer/>
        <Section data={props.data} dispatch={props.dispatch}/> 
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