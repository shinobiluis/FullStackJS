import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import clienteAxios from './config/axios';
// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  // state de la app
  const [citas, guardarCitas] = useState([]);
  const [consultar, guardarConsultar] = useState(true);
  useEffect( ()=>{
    if (consultar) {
      const consultarAPI = () => {
        clienteAxios.get('/pacientes')
          .then(respuesta => {
            // console.log(respuesta.data)
            // Colocar en el state el resultado
            guardarCitas(respuesta.data);
            // deshabilitar la consulta
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarAPI();
    }
  }, [consultar]);

  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={() => <Pacientes citas={citas}/>}
        />
        <Route
          exact path="/nueva"
          component={() => <NuevaCita guardarConsultar={guardarConsultar} ></NuevaCita>}
        />
        <Route
          exact path="/cita/:id"
          component={Cita}
        />
      </Switch>
    </Router>
  );
}

export default App;
