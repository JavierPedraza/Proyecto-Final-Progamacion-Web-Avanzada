import React, {Component} from 'react';
import './iphone.css';
import iphone11json from './json/iphone11.json';
import Social from './BannerInf.js';

class Contenido extends Component{
	state={
		iphone11json: iphone11json
	}
	render(){
		return(
			<div className="iphone11">
				
				{
					this.state.iphone11json.map(e=>
						<div >
						<h1>{e.titulo}</h1>
						<h2>{e.slogan}</h2>
						</div>
						)
				}
				
			</div>
		);
	}
}

function Iphone(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default Iphone;