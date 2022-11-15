import React from 'react';
import { useState } from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {
  const [show, setShow] = useState (true);

  const onAdd = (qty) => {
    console.log(qty);
    setShow (false);
  }
  return (
    <div className='itemDetail'>
      <div className='container'>
        <img className='productoImagen' src={item.img} alt={item.title}/>
        <article>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente id debitis incidunt explicabo repellendus officiis recusandae hic quo corporis ad odio autem quia quibusdam natus, quos in laborum eligendi dolorum.
          </p>
         <h2 className='productoDescripcion' >{item.title}</h2>
         <h3 className='productoDescripcion'>${item.price}.-</h3>
        </article>
      </div>
      {show ? (<ItemCount stock= {5} onAdd={onAdd}/>) : (
      <> 
      <button className='btn btn-dark'>IR AL CARRITO</button>
      </>
      )}
    
      
    </div>
  )
}

export default ItemDetail

