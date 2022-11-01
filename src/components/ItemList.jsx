import React from 'react'
import Item from './Item'

const ItemList = (items) => {
    items.map ((producto) =>{
        return (
            <div>
                <Item key= {producto.id} producto={producto}/>
            </div>
        )
    });
   }
        
export default ItemList 