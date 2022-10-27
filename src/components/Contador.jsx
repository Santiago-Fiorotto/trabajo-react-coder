import React, { useState } from 'react'

const Contador = ({stock}) => {
    const [cantidad, setCantidad] = useState (0);

    const sumar = () => {
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
         <button disabled ={cantidad === 0} onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button disabled ={cantidad === stock} onClick={sumar}>+</button>
    </div>
  )
}

export default Contador