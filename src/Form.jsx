import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';


function Form() {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init({
      publicKey: 'd3c9c69311b4c6bb3e1f148d3be280ae',
    });

    emailjs.sendForm('service_gmail', 'template_dreamcode', form.current, 'user_YcsuuRh1YwBuhIZyur5gR')
      .then((result) => {
            console.log(result.text);
            console.log('se envio el correo')
      }, (error) => {
          console.log(error.text);
          console.log('NO SE envio el correo')
      });

      setTimeout(function() {
          e.target.reset(); // Resetea el formulario después de 3 segundos (3000 milisegundos)
        }, 2000);
    
    
  };

  function handleClick() {
    console.log('Botón clickeado');
}

  return (
    <form ref={form} onSubmit={sendEmail}>
        <p className="read-the-docs">
         Agrega un correo para recibir el Mail
        </p>
      <input
        className="input"
        name="email"
        type="email"
        id="email"
        placeholder="tuemail@ejemplo.com"
        required
      />
      <br></br>
    <button onClick={handleClick} type="submit">
        Probar test
      </button>
    </form>
  )
}

export default Form;