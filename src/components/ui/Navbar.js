import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { reset } from '../../actions/podcast';
import loading from '../../imgs/loading.gif';
import loadingProd from '../../imgs/loadingProd.gif';

const Navbar = ({ title }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isloading, environment } = useSelector((state) => state.podcast);

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
				<p>{process.env.NODE_ENV}</p>
				{isloading && (
					<div>
						{environment == '1' ? (
							<img src={loadingProd} />
						) : (
							<img src={loading} />
						)}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
