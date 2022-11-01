import React, { useState } from 'react'

const ItemCount = ({stock}) => {
    const [cantidad, setCantidad] = useState (0);

    const onAdd = () => {
        if (cantidad < stock ) {
            setCantidad (cantidad + 1);
        }
 
    }

    const restar = () => {
        if (cantidad > 0) {
            setCantidad (cantidad - 1);
        }
        }
       
  return (
    <div className='contador'>
         <button className= "botonResta"disabled ={cantidad === 0} onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button className='botonSuma' disabled ={cantidad === stock} onClick={onAdd}>+</button>
    </div>
  )
}

export default ItemCount