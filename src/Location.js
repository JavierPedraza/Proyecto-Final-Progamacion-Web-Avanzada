import React, {Component} from 'react';
import Social from './BannerInf.js';
import './location.css';

class Contenido extends Component{
	render(){
		return(
			<div className="Location">
			</div>
		);
	}
}


function Location(){
  return(
    <div>
    	<Contenido/>
    	<Social/>
    </div>
  )
}
export default Location;