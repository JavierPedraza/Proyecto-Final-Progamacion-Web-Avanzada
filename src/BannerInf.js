import React from 'react';
import facebook from './img/facebook.jpeg';
import twitter from './img/twitter.jpeg';
import instagram from './img/instagram.jpeg';
import bannerInf from './img/bannerInferior.jpg';

function Social(){
	return(
		<div className="socialMedia">
			<a href="https://www.instagram.com/apple/" target="_blank"><img src={instagram} alt="instagram" className="socialLogo"/></a>
			<a href="https://www.facebook.com/apple" target="_blank"><img src={facebook} alt="facebook" className="socialLogo"/></a>
			<a href="https://twitter.com/Apple" target="_blank"><img src={twitter} alt="twitter" className="socialLogo"/></a>
			<BannerInf/>
		</div>
	);
}
function BannerInf(){
	return(
		<img src={bannerInf} alt="Bannr Inferior"/>
	);
}

export default Social;