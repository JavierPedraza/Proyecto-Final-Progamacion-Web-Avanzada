import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navegacion from './Navegacion.js';
import Iphone from './Iphone.js';
import Mac from './Mac.js';
import Ipad from './Ipad.js';
import Princ from './PaginaPrin.js';
import Watch from './Watch.js';
import Tv from './AppleTV.js';
import Music from './AppleMusic.js';
import Support from './AppleSupport.js';

function App(){
  return(
    <Router>
      <div>
        <Navegacion/>
        <Switch>
          <Route path="/" exact component={index}/>
          <Route path="/mac" exact component={Mac}/>
          <Route path="/iphone" exact component={Iphone}/>
          <Route path="/ipad" exact component={Ipad}/>
          <Route path="/princ" exact component={Princ}/>
          <Route path="/watch" exact component={Watch}/>
          <Route path="/tv" exact component={Tv}/>
          <Route path="/music" exact component={Music}/>
          <Route path="/support" exact component={Support}/>
        </Switch>
      </div>
    </Router>
  );
}

const index = () => (
  <div>
    <Princ/>
  </div>
);

export default App;