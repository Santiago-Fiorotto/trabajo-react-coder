import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../context/CartContext';
import {addDoc, collection, serverTimestamp} from "firebase/firestore";
import { db } from '../services/firebaseConfig';

const Form = () => {
    const [name,setName] = useState ("");
    const [lastName,setLastName] = useState ("");
    const [orderId, setOrderId] = useState("");

    const {cart, totalPrecio, deleteAll} = useContext(CartContext);
    const totalCarrito = totalPrecio();

    const enviarDatos = (e) => {
        e.preventDefault ();
        const objOrden = {
          buyer: {
            name,
            lastName,
            telefono: 3027529735,
            direccion: "Este y  arriba reemplazar por estados como name y lastName",
            email: "lo mismo que la dirección",
          },
          items: cart,
          total: totalCarrito,
          date: serverTimestamp(),
        };
        const orderCollection = collection (db, "orders" );
        addDoc(orderCollection, objOrden)
        .then((res)=>{
          setOrderId(res.id);
          deleteAll();
        })
        .catch((error)=>{

        })
        .finally(()=>{

        })
    };

    const handleName = (e) => {
        setName (e.target.value)
    };
    const handleLastName = (e) => {
        setLastName (e.target.value)
    };

    if (orderId) {
      return (<h2>Gracias por tu compra !! Te dejamos tu número de pedido por cualquier consulta que quiera realizar. {orderId} </h2>);
    }

  return (
    <form className='formulario container' onSubmit={enviarDatos}>
  <div className="mb-3">
    <label className="form-label">NOMBRE</label>
    <input onChange={handleName} value={name} placeholder='Ingrese su nombre..' type="text" className="form-control" name='nombre' required/>
  </div>
  <div className="mb-3">
    <label className="form-label">APELLIDO</label>
    <input onChange={handleLastName} value={lastName} placeholder='Ingrese su apellido..' type="text" className="form-control" name='apellido' required/>
  </div>
  <button type="submit" className="btn btn-dark">ENVIAR</button>
</form>
  )
}

export default Form