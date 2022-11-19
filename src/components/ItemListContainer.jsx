import React, { useEffect, useState } from 'react'
import { getProducts} from '../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect (()=>{
  getProducts(categoryName)
    .then((res) => {
      setItems (res);
    })
    .catch((error) => {
      console.log ("Hubo un error")
    })
    .finally(()=>{
      setLoading (false)
    })
    return setLoading(true);
  }, [categoryName]) ;//USE EFFECT

  if (loading) {
    return <h1>Cargando..</h1>
  }
  return (
    <div className='row mx-5'>
      <ItemList items= {items}/>
      </div>
    
  )
} //ITEM LIST CONTAINER

export default ItemListContainer