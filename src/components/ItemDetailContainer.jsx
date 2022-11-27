import React, {useEffect, useState}from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { collectionProd } from '../services/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [item, setItem] = useState ({});
  const {idProd} = useParams();
  const [loading, setLoading] = useState (true);
  
  useEffect (()=>{
    const ref = doc(collectionProd, idProd);
    getDoc(ref)
    .then((res)=>{
      setItem({
        id: res.id,
        ...res.data(),
      });
    })
    .catch((error)=>{
  
    })
    .finally(()=>{
      setLoading(false)
    })


  }, [idProd])

  if (loading) {
    return <div className='skeleton'>
      <Skeleton count={10} width={1000} height={50}/>
      </div>
  };


  return (
    <div className='contenedorItemDetail'>
      <ItemDetail item= {item}/>
    </div>
  )
}

export default ItemDetailContainer