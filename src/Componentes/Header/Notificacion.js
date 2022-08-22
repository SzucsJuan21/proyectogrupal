import styled from "styled-components"
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Notificacion = () => {
    const [show, setShow] = useState(true)

    return (
        <Container style={{top: show ? '0' : '-100px', height: show?'50px':'0px'}}>
            <div></div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Free Delivery over $100. Gift with Purchase over $150</Text>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}><Btn onClick={() => setShow(!show)}><IoClose size="40" /></Btn></div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 75% 1fr;
    background-color: #C2E8CE;
    position: relative;
    transition: 400ms;
`

const Btn = styled.button`
    all: unset; 
    margin-right: 8%;
    cursor: pointer;
`

const Text = styled.p`
    text-align: center;
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    line-height: 12px;
`

export default Notificacion