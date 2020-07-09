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
  useEffect( ()=>{
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(respuesta => {
          console.log(respuesta)
        })
        .catch(error => {
          console.log(error)
        })
    }
    consultarAPI();
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact path="/"
          component={Pacientes}
        />
        <Route
          exact path="/nuevacita"
          component={NuevaCita}
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
