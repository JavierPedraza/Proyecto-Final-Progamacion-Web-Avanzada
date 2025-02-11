import React, {Component} from 'react';
import iphone11json from './json/iphone11.json';
import iphone11projson from './json/iphone11pro.json';
import macbookprojson from './json/macbookprojson.json';
import iphone11 from './img/Iphone11.jpg';
import iphone11pro from './img/Iphone11ProBanner.jpg';
import MacbookProBanner from './img/MacPro.jpg';
import Social from './BannerInf.js';

class Iphone11 extends Component{
	state = {
		iphone11json: iphone11json
	}
	render(){
		return(
			<div className="Iphone11Div">
				{
					this.state.iphone11json.map(e=> 
						<li className="Iphone11">
						<h1>{e.titulo}</h1>
						<h2 className="Iphone11Title">{e.slogan}</h2>
						</li>)
				}
			</div>
		);
	}
}

class Iphone11Pro extends Component{
	state = {
		iphone11projson: iphone11projson
	}
	render(){
		return(
			<div className="Iphone11Div">
				{
					this.state.iphone11projson.map(e=> 
						<li className="Iphone11Pro">
						<h1>{e.titulo}</h1>
						<h2>{e.slogan}</h2>
						</li>)
				}
			</div>
		);
	}
}

class MacbookPro extends Component{
	state={
		macbookprojson: macbookprojson
	}
	render(){
		return(
			<div className="MacbookProDiv">
				<ul>
				{
					this.state.macbookprojson.map(e=>
						<li >
						<h1>{e.titulo}</h1>
						<h2>{e.slogan}</h2>
						</li>)
				}
				</ul>
			</div>
		);
	}
}

function Principal(){
  return(
    <div>
    	<Iphone11/>
    	<Iphone11Pro/>
    	<MacbookPro/>
    	<Social/>
    </div>
  )
}
export default Principal;