import React, {useEffect, useState}from 'react';
import { getProduct } from '../mock/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [item, setItem] = useState ({});
  const {idProd} = useParams();
  
  useEffect (()=>{
    getProduct(idProd)
    .then((res) => {
      setItem (res)
      
    }).catch((error) => {
      console.log ("Hubo un error")
    });

  }, [idProd]) //USE EFFECT




  return (
    <div className='contenedorItemDetail'>
      <ItemDetail item= {item}/>
    </div>
  )
}

export default ItemDetailContainer