import React, {Component} from 'react';
import './appleMusic.css';
import appleMusicjson from './json/applemusic.json';
import Social from './BannerInf.js';


class Contenido extends Component{
	state={
		appleMusicjson: appleMusicjson
	}
	render(){
		return(
			<div className="appleMusic">
				
				{
					this.state.appleMusicjson.map(e=>
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

function Music(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default Music;