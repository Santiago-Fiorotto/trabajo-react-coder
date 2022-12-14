import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import PulseLoader from "react-spinners/PulseLoader";
import {getDocs, query, where} from "firebase/firestore";
import { collectionProd } from '../services/firebaseConfig';



const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);
  const {categoryName} = useParams();
  const [loading, setLoading] = useState(true);

  useEffect (() => { 
      const ref = categoryName 
      ? query(collectionProd, where(`category`,`==`, categoryName))
      : collectionProd;

    getDocs(ref)
    .then((res)=>{
      const products = res.docs.map((prod)=>{
        return {
          id: prod.id,
          ...prod.data(),
        };
      });
      setItems(products);
    })
    .catch((error)=>{})
    .finally(()=>{
      setLoading(false);
    });

    return () => setLoading(true);
  }, [categoryName]) ;//USE EFFECT

  if (loading) {
    return <PulseLoader
    color="rgba(0, 0, 0, 1)"
    margin={30}
    size={40}
    speedMultiplier={1}
  />
  }
  return (
    <div className='container'>
      <ItemList items= {items}/>
      </div>
    
  );
} ;//ITEM LIST CONTAINER

export default ItemListContainer