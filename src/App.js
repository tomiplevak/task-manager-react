import "./App.css";
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
  return (
    <div className="App">
      <div className="fcc-logo-contenedor">
        <img src={freeCodeCampLogo} className="fcc-logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
