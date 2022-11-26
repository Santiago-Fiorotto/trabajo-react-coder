import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import {collection, getDocs} from "firebase/firestore";
import { useState } from 'react';
import { db } from '../services/firebaseConfig';

const NavBar = () => {
  const [categories, setCategories] = useState ([]);

  useEffect(()=>{
    const catCollection = collection(db, `categoriasNavBar`);

    getDocs(catCollection)
  .then((res)=>{
    const secciones = res.docs.map((prod)=>{
      return {
        id: prod.id,
        ...prod.data(),
      };
    });
    setCategories(secciones);
  })
  .catch((error)=>{})
  },[]); 



  return (
 <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <NavLink to="/"className="navbar-brand">
        <img className="logoFika" src="imagenes/logoFikaa.png" alt="Logo Fika" />
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page">INICIO</NavLink>
        </li>
        <li className="nav-item active dropdown">
          <NavLink to="/productos" className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </NavLink>
          <ul className="dropdown-menu">
            {
              categories.map((cat)=>(
                <li><NavLink key={cat.id} to={`/productos/category/${cat.path}` }className="dropdown-item">{cat.category}</NavLink></li>
              ))}
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link active" >CONTACTO</NavLink>
        </li> 
      </ul>
    </div>
    <div className="cartWidget">
          <NavLink to="/cart" className="nav-link active"><CartWidget/></NavLink> 
        </div>
  </div>
</nav>
 </div>
  )
}

export default NavBar