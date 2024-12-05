import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [completado, setCompleto] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    setCompleto(true);
  }

  if (completado == true) {
    return (
      <div id="Tarjeta">
        <h1>Contactado</h1>
        <div>
          <img src="./public\gatoxd.jpg" alt="gato" id="GatoXd" />
          <div id="info">
            <p>Nombre: {nombre} {apellido}</p>
            <p>Correo: {correo}</p>
            <p>Mensaje: {mensaje}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Contactame</h1>
        <label>
          Nombre
          <input
            required
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </label>
        <label>
          Apellido
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </label>
        <label>
          Correo
          <input
            type="text"
            value={correo}
            onChange={(event) => setCorreo(event.target.value)}
          />
        </label>
        <label>
          Mensaje
          <textarea
            value={mensaje}
            onChange={(event) => setMensaje(event.target.value)}
          ></textarea>
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default App;
