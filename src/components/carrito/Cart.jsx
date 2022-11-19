import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext'



const Cart = () => {
  const {cart, deleteAll, deleteOne, totalPrecio} = useContext (CartContext);
  
  if (cart.length === 0) 
  return ( <h2>Tu carrito está vacio, volvé al <Link className="btn btn-dark"to="/">INICIO</Link></h2>);
  return (
    <div>
      {cart.map((prod) =>(
        <div className='col'>
        <div className="card ">
   <img src={prod.img} className="card-img-top" alt={prod.title}/>
   <div className="card-body">
     <h4 className="card-title productoDescripcion">{prod.title}</h4>
     <h4 className="card-title productoDescripcion"> {prod.cantidad}</h4>
     <button onClick={()=>deleteOne(prod.id)}>Eliminar</button>
   </div>
 </div>
     </div>
      ))}
      <h2>TOTAL: ${totalPrecio()}</h2>
      <button className="btn btn-danger "onClick={deleteAll}>Vaciar Carrito</button>
    </div>
  )
}

export default Cart