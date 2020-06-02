import React, {Component} from 'react';
import Social from './BannerInf.js';
import appleSupportjson from "./json/appleSupport.json";
import './appleSupport.css'

class Contenido extends Component{
	state={
		appleSupportjson: appleSupportjson
	}
	render(){
		return(
			<div className="appleSupport">
				
				{
					this.state.appleSupportjson.map(e=>
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

function Support(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default Support;