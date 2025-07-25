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
      <h1>Prueba Técnica</h1>
      <div className="card">
      <Form />
      </div>
      <a href='/folder/index.html' >Click</a>
      <p className="read-the-docs">
        Descargar el .zip con los archivos <a href="/folder.zip" download>Aquí</a>
      </p>
    </>
  )
}

export default App
