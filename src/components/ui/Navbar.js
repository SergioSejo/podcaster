import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { reset } from '../../actions/podcast';
import loading from '../../imgs/loading.gif';

const Navbar = ({ title }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isloading } = useSelector((state) => state.podcast);

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
				{isloading && (
					<div>
						<img src={loading} />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
