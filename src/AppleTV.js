import React, {Component} from 'react';
import appletvjson from './json/appletv.json';
import './appletv.css';
import Social from './BannerInf.js';

class Contenido extends Component{
	state={
		appletvjson: appletvjson
	}
	render(){
		return(
			<div className="appleTV">
				
				{
					this.state.appletvjson.map(e=>
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


function TV(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default TV;