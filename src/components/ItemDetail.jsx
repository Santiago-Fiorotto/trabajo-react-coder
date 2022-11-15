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
      {show ? (<ItemCount stock= {5} onAdd={onAdd}/>) : (
      <> 
      <button className='btn btn-dark'>IR AL CARRITO</button>
      </>
      )}
    </div>
  )
}

export default ItemDetail

