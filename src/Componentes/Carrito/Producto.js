import React from 'react'

const Producto = ({data, addToCart}) => {
  return (
    <div style={{width:'300px', height:'300px',backgroundColor:'#d9d9d9', margin:'20px'}}>
        <div style={{margin:'20px'}}>
        <h1>{data.name}</h1>
        <p>${data.price}</p>
        <button onClick={() => addToCart(data.id)}>añadir</button>
        </div>
    </div>
  )
}

export default Producto