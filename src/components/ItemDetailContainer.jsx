import React, {useEffect, useState}from 'react';
import { getProduct } from '../mock/products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ItemDetailContainer = () => {

  const [item, setItem] = useState ({});
  const {idProd} = useParams();
  const [loading, setLoading] = useState (true);
  
  useEffect (()=>{
    getProduct(idProd)
    .then((res) => {
      setItem (res)
      
    })
    .catch((error) => {
      console.log ("Hubo un error")
    })
    .finally(() =>{
      setLoading(false);
    });

  }, [idProd]) //USE EFFECT

  if (loading) {
    return <Skeleton count={10} width={200} height={30}/>
  };


  return (
    <div className='contenedorItemDetail'>
      <ItemDetail item= {item}/>
    </div>
  )
}

export default ItemDetailContainer