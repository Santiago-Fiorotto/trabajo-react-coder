import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name,setName] = useState ("");
    const [lastName,setLastName] = useState ("");

    const enviarDatos = (e) => {
        e.preventDefault ();
    };

    const handleName = (e) => {
        setName (e.target.value)
    };
    const handleLastName = (e) => {
        setLastName (e.target.value)
    };

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