import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import logo from './img/AppleLogo.png'

function Navegacion(){
	const estilo = {
		color: 'white'
	};
  return(
    <nav>
    	<ul className="enlaces">
    		<Link style={estilo} to='/'>
    			<li><img src={logo} alt="AppleLogo" className="Logo"/></li>
    		</Link>
    		<Link style={estilo} to='/catalogo'>
    			<li>Catalogo</li>
    		</Link>
    		<Link style={estilo} to='/acerca'>
    			<li>Acerca</li>
    		</Link>
            <Link style={estilo} to='/iphone'>
                <li>Iphone</li>
            </Link>
    	</ul>
    </nav>
  )
}
export default Navegacion;