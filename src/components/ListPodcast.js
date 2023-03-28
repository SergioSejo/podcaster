import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getPodcasts, getDetailPodcast, reset } from '../actions/podcast';
import NoResults from './ui/NoResults';

const ListPodcast = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [filterPodcast, setFilterPodcast] = useState([]);
	const [countPd, setCountPd] = useState([]);
	const { listPodcasts } = useSelector((state) => state.podcast);

	useEffect(() => {
		dispatch(getPodcasts());
		dispatch(reset());
	}, []);

	useEffect(() => {
		if (listPodcasts) {
			setFilterPodcast(listPodcasts);
			setCountPd(listPodcasts.length);
		} else {
			setFilterPodcast([]);
			setCountPd(0);
		}
	}, [listPodcasts]);

	const handleInputChange = (event) => {
		let text = event.target.value.toLowerCase();
		let filterList = listPodcasts.filter((option) => {
			return (
				option['im:name'].label.toLowerCase().includes(text) ||
				option['im:artist'].label.toLowerCase().includes(text)
			);
		});
		setFilterPodcast(filterList);
		if (filterList) {
			setCountPd(filterList.length);
		}
	};

	const onclickCard = (event, key) => {
		dispatch(getDetailPodcast(key));
		navigate(`/podcast/${key}`);
	};

	return (
		<div className="container">
			<div className="divFilter">
				<span className="numberFilter">{countPd}</span>
				<input
					type="text"
					className="inputFilter"
					placeholder="Filter podcasts..."
					onChange={handleInputChange}
				/>
			</div>
			<div className="row">
				{filterPodcast?.length > 0 ? (
					filterPodcast.map((item) => (
						<div
							key={item.id.attributes['im:id']}
							className="col-lg-3 col-md-6 col-sm-12 mb-4"
						>
							<div
								className="card cursorPointer"
								style={{ minWidth: '200px' }}
								onClick={(event) =>
									onclickCard(event, item.id.attributes['im:id'])
								}
							>
								<img
									className="card-img-top"
									src={item['im:image'][2].label}
									alt="podcast"
								/>
								<div className="card-body text-center">
									<h5 className="card-title">{item['im:name'].label}</h5>
									<p className="card-text">Author: {item['im:artist'].label}</p>
								</div>
							</div>
						</div>
					))
				) : (
					<NoResults text="No hay resultados que coincidan con la búsqueda" />
				)}
			</div>
		</div>
	);
};

export default ListPodcast;
