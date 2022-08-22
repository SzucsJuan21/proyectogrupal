import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import img from './Img/export'
import useWindowSize from '../Utilidades/windowSize'

const Slider = () => {
  const { width, height } = useWindowSize();
  const animationWindowSize = (width - width*0.21) * -1;
  console.log(animationWindowSize)


  return (
    <Container>
      <h1 style={s.h1}><a href="" style={s.a}>@PremiumBakery</a> on Instagram</h1>
      <SliderContainer>
        <motion.div style={s.slider} drag='x' dragConstraints={{ right:0, left:-2970 + width }}>
          {img.map(image => (
            <motion.div style={s.item}>
              <img src={image} style={s.img}></img>
            </motion.div>
          ))}
        </motion.div>
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
  align-items: flex-end;
  overflow-x: hidden;
`

const s = {
  slider: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    cursor: 'grab',
    width: '100%'
  },
  item: {
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