import React from 'react'
import { Helmet } from 'react-helmet-async';

const SignOutPage = () => {
  return (
    <article className="signin__page">
      <Helmet>
        <title>Amazona | Sign Up</title>
      </Helmet>
      <h2 className="signin__title">Iniciar Sesión</h2>
      <section className="formulario">
        <form className="formulario_auth">
          <div className="campo">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email"/>
          </div>
          <div className="campo">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
          </div>
          <button className="boton__signin">Signin</button>
          <div className="signin__link">
            <p>Nuevo cliente? <Link to="/signout">Crea tu cuenta</Link></p>
          </div>
        </form>
      </section>
    </article>
  )
}

export default SignOutPage