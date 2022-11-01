import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'
import ItemList from './ItemList';

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);

  useEffect (()=>{

   const getProducts = () =>{
      return new Promise ((res,rej) => {
        setTimeout (()=>{
          res (products);
        }, 2000)
        
      });//NEW PROMISE

    } //GET PRODUCTS
    getProducts().then((res) => {
      setItems (res)
      console.log (res);
    }).catch((error) => {
      console.log ("Hubo un error")
    });

  }, []) //USE EFFECT


  return (
    <div>
      <ItemList items= {items}/>
      </div>
    
  )
} //ITEM LIST CONTAINER

export default ItemListContainer