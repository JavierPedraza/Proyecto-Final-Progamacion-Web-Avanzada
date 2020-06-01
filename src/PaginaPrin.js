import React, {Component} from 'react';
import texto from './json/princ.json';

class Texto extends Component{
	state = {
		texto: texto
	}
	render(){
		return(
			<div>
			{
				this.state.texto.map(e => <p>{e.texto}</p>)
			}
			</div>
		);
	}
}

function Principal(){
  return(
    <div>
    	<Texto/>
    </div>
  )
}
export default Principal;