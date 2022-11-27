import React from 'react'
import {ImWhatsapp} from "react-icons/im"


const Contacto = () => {
  return (
    <div className='container'>
      <div className='ubi'>
        <h3 className='ubi-text container'>Encontranos en Martinez Mendoza 652, Villa María, Córdoba.</h3>
      <img className='ubi-foto container' src="https://res.cloudinary.com/djjmhiwzd/image/upload/v1669424589/Captura_de_Pantalla_2022-11-25_a_la_s_22.01.24_kvkeu4.png" alt="Localización FIKA" />
      <h3 className='ubi-text container'>O comunicate al 3534277821<ImWhatsapp/></h3>
      </div>
          
    </div>

  )
}

export default Contacto