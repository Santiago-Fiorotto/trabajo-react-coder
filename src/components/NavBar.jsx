import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
 <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img className="logoFika" src="imagenes/logoFikaa.png" alt="Logo Fika" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">NOSOTROS</a>
        </li>
        <li class="nav-item active dropdown">
          <a class="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRODUCTOS
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">DAMA</a></li>
            <li><a class="dropdown-item" href="#">CABALLERO</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">CONTACTO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"><CartWidget/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </div>
  )
}

export default NavBar