import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className='col'>
       <div className="card container ">
  <img src={producto.img} className="card-img-top" alt={producto.title}/>
  <div className="card-body">
    <h2 className="card-title productoDescripcion">{producto.title}</h2>
    <h4 className="card-title productoDescripcion">$ {producto.price}</h4>
    <Link className="btn btn-dark linkVerDetalles" to={`/detail/${producto.id}`}>VER DETALLES</Link>
  </div>
</div>
    </div>
   
  )
} 

export default Item
