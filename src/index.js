import React from "react";
import CriarNotas from './criarNota.js'
import ReactDOM from 'react-dom';
import VerNotas from './verNotas.js'
import Login from './login.js'
import Registar from './registar.js'
import Logout from './logout.js'
import Auth from './Auth';

import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <div style={{width: '100%'}}>


  <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/verNotas">
            <VerNotas />
          </Route>
          <Route path="/criarNota">
            <CriarNotas />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registar">
            <Registar />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <VerNotas />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

//const element=<NotesComponent></NotesComponent>

//ReactDOM.render(element,document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
