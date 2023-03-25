import React from 'react';

const Footer = ({ text }) => {
	return (
		<nav className="footer footer-dark bg-dark">
			<div className="container">
				<a className="footer-brand">{text}</a>
			</div>
		</nav>
	);
};

export default Footer;
