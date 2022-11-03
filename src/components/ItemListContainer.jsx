import React, { useEffect, useState } from 'react'
import { products } from '../mock/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  
  const [items, setItems] = useState ([]);
  const {categoryName} = useParams();

  useEffect (()=>{
    if (categoryName) {

   const getProductsFilter = () =>{
      return new Promise ((res,rej) => {
        const productosFiltrados = products.filter ((prod) => prod.category === categoryName);
        setTimeout (()=>{
          res (productosFiltrados);
        }, 2000);
        
      });//NEW PROMISE

    }; //GET PRODUCTS
    getProductsFilter()
    .then((res) => {
      setItems (res);
    }).catch((error) => {
      console.log ("Hubo un error")
    });

  } else {
    const getProducts = () => {
      return new Promise ((res,rej) => {
        setTimeout (() => {
          res (products);
        },2000);
      });
    };
    getProducts ()
    .then ((res) => {
      setItems(res);
    })
    .catch ((error) => {
      console.log ("Hubo un error");
    });
  }
  }, [categoryName]) //USE EFFECT


  return (
    <div>
      <ItemList items= {items}/>
      </div>
    
  )
} //ITEM LIST CONTAINER

export default ItemListContainer