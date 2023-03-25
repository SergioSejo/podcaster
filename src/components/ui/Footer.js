import React from 'react';

const Footer = ({ text }) => {
	return (
		<footer className="bg-dark">{`Copyright © podcaster by ${text}`}</footer>
	);
};

export default Footer;
