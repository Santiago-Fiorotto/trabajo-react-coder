import React, { useEffect, useState } from 'react'
//import { getProducts} from '../mock/products'
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

    //const q = query(collectionProd, where(`category`,`==`, categoryName));

    getDocs(collectionProd)
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


  /*getProducts(categoryName)
    .then((res) => {
      setItems (res);
    })
    .catch((error) => {
      console.log ("Hubo un error")
    })
    .finally(()=>{
      setLoading (false)
    })*/
    return () => setLoading(true);
  }, [categoryName]) ;//USE EFFECT

  if (loading) {
    return <PulseLoader/>
  }
  return (
    <div className='row mx-5'>
      <ItemList items= {items}/>
      </div>
    
  );
} ;//ITEM LIST CONTAINER

export default ItemListContainer