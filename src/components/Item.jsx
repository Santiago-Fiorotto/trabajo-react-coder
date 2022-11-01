import React from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
  return (
    <div>
        <div>
        <img src={producto.img} alt={producto.title}/>
        <article>
         <h2>{producto.title}</h2>
        <h3>${producto.price}.-</h3>

        </article>
        </div>
      <ItemCount stock= {5}/>
    </div>
  )
}

export default Item