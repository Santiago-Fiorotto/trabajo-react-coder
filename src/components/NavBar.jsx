import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
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
        <li className="nav-item">
          <NavLink to="/nosotros" className="nav-link active">NOSOTROS</NavLink>
        </li>
        <li className="nav-item active dropdown">
          <NavLink to="/productos" className="nav-link active dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink to="/productos/category/dama" className="dropdown-item">DAMA</NavLink></li>
            <li><NavLink to="productos/category/caballero" className="dropdown-item">CABALLERO</NavLink></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="/contacto" className="nav-link active" >CONTACTO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link active"><CartWidget/></NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
  )
}

export default NavBar