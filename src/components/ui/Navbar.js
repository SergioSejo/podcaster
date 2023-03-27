import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ title }) => {
	const navigate = useNavigate();

	const onclickTitle = () => {
		navigate('/');
	};
	return (
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">
				<a
					className="navbar-brand text-uppercase cursorPointer"
					onClick={onclickTitle}
				>
					{title}
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
