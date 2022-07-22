import React, { useState } from "react";
import "./TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput('');
  };

  return (
    <form className="tarea-formulario" onSubmit={handleAdd}>
      <input
        className="tarea-input"
        type="text"
        placeholder="Escribe una tarea"
        name="texto"
        onChange={handleChange}
        value={input}
      />
      <button className="tarea-boton">Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;
