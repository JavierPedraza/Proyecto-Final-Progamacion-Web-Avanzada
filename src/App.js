import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Catalogo from './Catalogo.js';
import Acerca from './Acerca.js';
import Navegacion from './Navegacion.js';
import Iphone from './Iphone.js';

function App(){
  return(
    <Router>
      <div>
        <Navegacion/>
        <Switch>
          <Route path="/" exact component={index}/>
          <Route path="/catalogo" exact component={Catalogo}/>
          <Route path="/acerca" exact component={Acerca}/>
          <Route path="/iphone" exact component={Iphone}/>
        </Switch>
      </div>
    </Router>
  );
}

const index = () => (
  <div>
    PAGINA PRINCIPAL
  </div>
);

export default App;