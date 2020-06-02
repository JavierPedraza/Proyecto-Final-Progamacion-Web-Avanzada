import React, {Component} from 'react';
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
import IpadBanner from './img/IpadProBanner.jpg';
import IphoneBanner from './img/Iphone11Banner.jpg';
import BannerInf from './BannerInf.js';

class BannerSup extends Component{
  render(){
    return(
      <div>
        <img src={IphoneBanner} alt="Banner Iphone" className="BannerSupImg"/>
      </div>
    );
  }
}

function App(){
  return(
    <Router>
      <div>
      <BannerSup />
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
    <BannerInf/>
  </div>
);

export default App;