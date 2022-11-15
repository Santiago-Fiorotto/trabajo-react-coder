import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({producto}) => {
  return (
    <div className='col'>
       <div className="card ">
  <img src={producto.img} class="card-img-top" alt={producto.title}/>
  <div className="card-body">
    <h2 className="card-title productoDescripcion">{producto.title}</h2>
    <h4 className="card-title productoDescripcion">$ {producto.price}</h4>
    <Link to={`/detail/${producto.id}`}>VER DETALLES</Link>
  </div>
</div>
    </div>
   
  )
}

export default Item

//SIN BOOTSTRAP
   /* <div className='itemProducto container'>
        <div>
        <img className='productoImagen container' src={producto.img} alt={producto.title}/>
        <article>
         <h2 className='productoDescripcion' >{producto.title}</h2>
        <h3 className='productoDescripcion'>${producto.price}.-</h3>
        </article>
        <Link to={`/detail/${producto.id}`}>VER DETALLES</Link>
        </div>
    </div>*/