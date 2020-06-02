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
    		<Link style={estilo} to='/princ'>
    			<li><img src={logo} alt="AppleLogo" className="Logo"/></li>
    		</Link>
            <Link style={estilo} to='/mac'>
                <li>Mac</li>
            </Link>
            <Link style={estilo} to='/ipad'>
                <li>iPad</li>
            </Link>
            <Link style={estilo} to='/iphone'>
                <li>iPhone</li>
            </Link>
            <Link style={estilo} to='/watch'>
                <li>Watch</li>
            </Link>
            <Link style={estilo} to='/tv'>
                <li>AppleTV</li>
            </Link>
            <Link style={estilo} to='/music'>
                <li>AppleMusic</li>
            </Link>
            <Link style={estilo} to='/support'>
                <li>Support</li>
            </Link>
            <Link style={estilo} to='/location'>
                <li>Localizacion</li>
            </Link>
    	</ul>
    </nav>
  );
}
export default Navegacion;