import React from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom'


const initialState = {
  email: '',
  password: ''
}
const SigninPage = () => {

  const [dataForm, setDataForm] = useState(initialState)

  const handlerChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value 
    })
  }

  return (
    <article className="signin__page">
      <Helmet>
        <title>Amazona | Sign In</title>
      </Helmet>

      <h2 className="signin__title">Iniciar Sesión</h2>
      <section className="formulario">
        <form className="formulario_auth">
          <div className="campo">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              name="email" 
              id="email"
              onChange={handlerChange}
              value={dataForm.email}
              required
            />
          </div>
          <div className="campo">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              name="password" 
              id="password"
              onChange={handlerChange}
              value={dataForm.password}
              required
            />
          </div>
          <button className="boton__signin">Signin</button>
          <div className="signin__link">
            <p>Nuevo cliente? <Link to={`/signup?redirect/`}>Crea tu cuenta</Link></p>
          </div>
        </form>
      </section>
    </article>
  )
}

export default SigninPage