import { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import img from './Img/export'
import { RiArrowLeftCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import SliderImg from './SliderImg';

const Slider = () => {
  const [width, setWidth] = useState(0)
  const slider = useRef()
  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, [])


  return (
    <Container>
      <h1 style={s.h1}><a href="" style={s.a}>@PremiumBakery</a> on Instagram</h1>
      <SliderContainer>

        <Btn>
          <RiArrowLeftCircleFill size={40} color='#FF8126' />
        </Btn>

        <SliderWrapper ref={slider}>
          <motion.div style={s.slider} drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: 'grabbing' }} >
            {img.map(image => (
              <SliderImg img={image} />
            ))}
          </motion.div>
        </SliderWrapper>

        <Btn>
          <RiArrowRightCircleFill size={40} color='#FF8126' />
        </Btn>

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

const SliderContainer = styled.div`
  width: 80%;
  height: 200px;
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
  &:hover {
    filter: brightness(90%);
  }
`

const s = {
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'grab',
    width: '100%'
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
    fontFamily: 'Times New Roman, sans-serif',
    textAlign: 'center',
    marginTop: '0'
  },

  a: {
    color: 'orange',
  },
}

export default Slider