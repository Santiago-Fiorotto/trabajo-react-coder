import React from 'react'
import {FaRegCopyright} from "react-icons/fa"
import {GrFacebook} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <div className='footer container-fluid'>
      <ul className="redesLogos">
      <li className="redesLogos"><GrFacebook/></li>
      <li className="redesLogos"><BsInstagram/></li>
      <li className="redesLogos"><BsWhatsapp/></li>
      </ul>
        <h5>Martinez Mendoza 652, Villa María, Córdoba, Argentina</h5>
        <h5> <FaRegCopyright/> Copyright, 2022 - FIKA - Todos los derechos reservados</h5>
    </div>
  )
}

export default Footer 
