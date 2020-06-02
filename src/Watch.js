import React, {Component} from 'react';
import './Watch.css';
import Social from './BannerInf.js';
import watchJson from './json/watch.json';

class Contenido extends Component{
	state={
		watchJson: watchJson
	}
	render(){
		return(
			<div className="appleWatch">
				
				{
					this.state.watchJson.map(e=>
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


function Watch(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default Watch;