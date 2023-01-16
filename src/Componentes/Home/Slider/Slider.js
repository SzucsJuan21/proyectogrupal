import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import styled from 'styled-components'
import img from './Img/export'
import SliderImg from './SliderImg';
import useWindowSize from '../../Utilidades/windowSize';


const Slider = () => {
  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderPos, setSliderPos] = useState(0)
  const slider = useRef()
  useEffect(() => {
    window.addEventListener("resize", setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth));
  }, [])
  const { width } = useWindowSize()



  return (
    <Container>
      <h1 style={s.h1}><Link href="">@PremiumBakery</Link> on Instagram</h1>
      <SliderContainer>

        {width >= 780 &&
          <Btn sldr={{sliderPos,sliderWidth}} onClick={() => setSliderPos(sliderPos + 800 < 0 ? sliderPos + 800 : 0)}>
            <BsArrowLeftCircle size={45} color={ sliderPos === 0 ? '#999' : '#FF8126' } />
          </Btn>
        }

        <SliderWrapper ref={slider}>
          <motion.div style={s.slider}
            drag={width < 780 ? 'x' : ''}
            dragConstraints={{ right: 0, left: -sliderWidth }}
            initial={{ translateX: 1 }}
            animate={{ translateX: sliderPos }}
            transition={{ duration: 0.5 }}
          >

            {img && img.map(image => (
              <SliderImg img={image} key={image} />
            ))}

          </motion.div>
        </SliderWrapper>

        {width >= 780 &&
          <Btn sldr={{sliderPos,sliderWidth}} onClick={() => setSliderPos(sliderPos - 800 > -sliderWidth ? sliderPos - 800 : -sliderWidth)}>
            <BsArrowRightCircle size={45} color={ sliderPos === -sliderWidth ? '#999' : '#FF8126' } />
          </Btn>
        }

      </SliderContainer>


    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`

const Link = styled.a`
  text-decoration: none;
  color: #FF8126;
  &:hover {
    color: #D96918;
  }
`

const SliderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`

const Btn = styled.button`
  all: unset;
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    filter: ${props => props.sldr.sliderPos === 0 || props.sldr.sliderPos === -props.sldr.sliderWidth ? '' : 'brightness(90%)'};
  }
`

const s = {
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'grab',
    width: '100%',
    translateX: '0',
  },

  img: {
    padding: '10px',
    margin: '0 10px',
    width: '150px',
    height: '150px',
    pointerEvents: 'none',
    border: '2px solid rgb(0,0,0,0.1)',
    boxShadow: '1px 1px 10px rgb(0,0,0,0.4)',
  },

  h1: {
    fontFamily: 'Crete Round, serif',
    letterSpacing: '1px',
    textAlign: 'center',
    marginTop: '0'
  },
}

export default Slider