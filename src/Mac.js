import React, {Component} from 'react';
import './Mac.css';
import Social from './BannerInf.js';
import macbookprojson from './json/macbookprojson.json';

class Contenido extends Component{
	state={
		macbookprojson: macbookprojson
	}
	render(){
		return(
			<div className="MacbookProDiv">
				
				{
					this.state.macbookprojson.map(e=>
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

function Mac(){
	return(
		<div>
		<Contenido />
		<Social />
		</div>
	);
}

export default Mac;