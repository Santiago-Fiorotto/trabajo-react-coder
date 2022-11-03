import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className='itemProducto container'>
        <div>
        <img className='productoImagen' src={producto.img} alt={producto.title}/>
        <article>
         <h2 className='productoDescripcion' >{producto.title}</h2>
        <h3 className='productoDescripcion'>${producto.price}.-</h3>
        </article>
        <Link to={`/detail/${producto.id}`}>VER DETALLES</Link>
        </div>
    </div>
  )
}

export default Item
