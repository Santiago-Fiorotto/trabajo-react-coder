import React, { useEffect, useState } from 'react'
import { getProducts} from '../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);
  const {categoryName} = useParams();

  useEffect (()=>{
    getProducts(categoryName)
    .then((res) => {
      setItems (res);
    }).catch((error) => {
      console.log ("Hubo un error")
    });
  }, [categoryName]) //USE EFFECT


  return (
    <div>
      <ItemList items= {items}/>
      </div>
    
  )
} //ITEM LIST CONTAINER

export default ItemListContainer