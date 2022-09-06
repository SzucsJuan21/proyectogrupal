import styled from 'styled-components'
import { TYPES } from '../Utilidades/actions'
import React from 'react'

const CarritoItem = ({ data, removeFromCart }) => {
    return (
        <Container>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <p>x{data.count ? data.count : 1} </p>
                <p>{data.title}</p>
                <p>${data.count ? (data.price * data.count).toFixed(2) : data.price.toFixed(2)}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => removeFromCart(TYPES.REMOVE_ONE_PRODUCT, data.id )} style={{height:'30px', margin:'auto 10px'}}>remover</button>
                <button onClick={() => removeFromCart(TYPES.REMOVE_ALL_PRODUCTS, data.id )} style={{height:'30px', margin:'auto 10px'}}>remover todos</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 50px;
    background-color: #b9b9b9;
`

export default CarritoItem