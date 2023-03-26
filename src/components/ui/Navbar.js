import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { reset } from '../../actions/podcast';

const Navbar = ({ title }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onclickTitle = () => {
		dispatch(reset());
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
