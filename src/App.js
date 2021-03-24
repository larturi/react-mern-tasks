import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { RutaPrivada } from './components/rutas/RutaPrivada';

import { Login } from './components/auth/Login';
import { NuevaCuenta } from './components/auth/NuevaCuenta';
import { Proyectos } from './components/proyectos/Proyectos';

import tokenAuth from './config/tokenAuth';

import AlertaState from './context/alertas/alertaState';
import AuthState from './context/autenticacion/authState';
import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';

// Revisar si tenemos tocken de usuario autenticado
const token = localStorage.getItem('token');

if (token) {
  tokenAuth(token);
}

function App() {

  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
