import React, {Component} from 'react';
import './IpadPro.css';
import Social from './BannerInf.js';
import IpadProjson from './json/IpadPro.json';

class Contenido extends Component{
	state={
		IpadProjson: IpadProjson
	}
	render(){
		return(
			<div className="IpadProDiv">
				
				{
					this.state.IpadProjson.map(e=>
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

function Ipad(){
	return(
		<div>
			<Contenido/>
			<Social/>
		</div>
	);
}

export default Ipad;