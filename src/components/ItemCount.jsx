import React, { useState } from 'react'

const ItemCount = ({stock, onAdd}) => {
    const [cantidad, setCantidad] = useState (1);

    const sumar = () => {
        cantidad < stock && setCantidad (cantidad+1);
    }

    const restar = () => {
        cantidad > 1 && setCantidad (cantidad-1);
        };
        const agregar  = () =>{
            onAdd(cantidad);
        }
       
  return (
    <div className='contador'>
         <button className= "botonResta"disabled ={cantidad === 0} onClick={restar}>-</button>
        <p>{cantidad}</p>
        <button className='botonSuma' disabled ={cantidad === stock} onClick={sumar}>+</button>
        <div>
            <button onClick={agregar}>AGREGAR AL CARRITO</button>
        </div>
    </div>
  )
}

export default ItemCount