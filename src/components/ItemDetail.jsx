import React from 'react';
import { useState, useContext  } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const [show, setShow] = useState (true);


  const {addToCart} = useContext (CartContext);

  const onAdd = (qty) => { 
    setShow (false);
    addToCart(item, qty);
  }
  return (
  <div className='container itemDetail'>
      <div className='container'>
      <h2 className='productoDescripcion' >{item.title}</h2>
      <h2 className='productoDescripcion'>${item.price}.-</h2>
        <div className='imagenDetailContainer'>
        <img className='productoImagen' src={item.img} alt={item.title}/>
        </div>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id debitis incidunt explicabo repellendus officiis recusandae hic quo corporis ad odio autem quia quibusdam natus, quos in laborum eligendi dolorum.
          </p>
        </article>
      </div>
      {show ? (<ItemCount stock= {item.stock} onAdd={onAdd}/>) : (
      <> 
      <Link className='btn btn-dark' to="/cart">IR AL CARRITO</Link>
      </>
      )}
    </div>
  )
}

export default ItemDetail

