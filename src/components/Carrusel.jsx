import React from 'react'

const Carrusel = () => {
  return (
    <div className='container carrusel'>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259553/NI%C3%91OS_CRUZAAS_o7qw62.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259552/LUNARES_CRUZADASremovebg-preview_urru2r.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259551/CRUZADAS_FRENTE_oxeonh.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev"  type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon"  aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
  )
}

export default Carrusel