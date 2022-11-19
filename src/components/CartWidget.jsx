import React from 'react'
import { useContext } from 'react'
import {TiShoppingCart} from "react-icons/ti"
import { CartContext } from '../context/CartContext'

const CartWidget = () => {
  const {totalUnidades} = useContext(CartContext);
  return (
   <div className='carrito'>
    <TiShoppingCart/>
    <span>{totalUnidades() !== 0 && totalUnidades()}</span>
    </div>
  );
};

export default CartWidget