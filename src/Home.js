import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Bienvenido a Correos SMTP</h1>
      <p>Esta es una aplicación para enviar correos electrónicos.</p>
      <Link to="/form">
        <button>Ir al formulario</button>
      </Link>
    </div>
  );
}

export default Home;

