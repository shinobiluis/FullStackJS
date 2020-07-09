import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL);
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
