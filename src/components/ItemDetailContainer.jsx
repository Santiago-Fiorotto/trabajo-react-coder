import React, {useEffect, useState}from 'react';
import { products } from '../mock/products';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

  const [item, setItem] = useState ({});

  useEffect (()=>{

   const getProduct = () =>{
      return new Promise ((res,rej) => {
        const product = products.find((prod)=>prod.id === 3)
        setTimeout (()=>{
          console.log (product)
          res (product);
        }, 2000)
        
      });//NEW PROMISE

    } //GET PRODUCTS
    getProduct().then((res) => {
      setItem (res)
      console.log (res);
    }).catch((error) => {
      console.log ("Hubo un error")
    });

  }, []) //USE EFFECT




  return (
    <div>
      <ItemDetail item= {item}/>
    </div>
  )
}

export default ItemDetailContainer