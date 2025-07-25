import { useState } from 'react'
import juanLogo from './assets/logo-juan.png'
import imgRandom from './assets/image/img-laptop.png'
import bbvaLogo from './assets/logo-BBVA.png'
import './App.css'
import Form from './Form';


function App() {


  return (
    <>
      <div>
        <a href="https://www.bbva.com/" target="_blank">
          <img src={bbvaLogo} className="logo" alt="BBVA logo" />
        </a>
        
        <a href="https://github.com/juanaranjodev" target="_blank">
          <img src={juanLogo} className="logo react" alt="Juan logo" />
        </a>
      </div>
      <h1>Prueba Técnica para el Banco BBVA </h1>
      <div className="card">
      <Form />
      </div>
      <p className="read-the-docs">
        Descargar el <strong>.zip </strong>con los archivos <a href="https://juanaranjodev.github.io/bbva-prueba/folder.zip" target="_blank" rel="noopener noreferrer">Aquí</a>
      </p>
    </>
  )
}

export default App
