import React, { useEffect, useState } from 'react';

import podcastService from '../../services/podcastService';
import NoResults from './NoResults';

const ListPodcast = () => {
	const pdService = new podcastService();
	const [listPd, setListPd] = useState([]);
	const [filterPd, setFilterPd] = useState([]);
	const [countPd, setCountPd] = useState([]);

	useEffect(() => {
		const getPd = async () => {
			const result = await pdService.getPodcasts();
			setListPd(result);
			setFilterPd(result);
			setCountPd(result.length);
		};
		getPd();
	}, []);

	const filterChange = (event) => {
		let text = event.target.value.toLowerCase();
		let result = listPd.filter((option) => {
			return (
				option['im:name'].label.toLowerCase().includes(text) ||
				option['im:artist'].label.toLowerCase().includes(text)
			);
		});
		setFilterPd(result);
		setCountPd(result.length);
	};

	return (
		<div className="container">
			<div className="divFilter">
				<span className="numberFilter">{countPd}</span>
				<input
					type="text"
					className="inputFilter"
					placeholder="Filter podcasts..."
					onChange={filterChange}
				/>
			</div>
			<div className="row">
				{filterPd.length > 0 ? (
					filterPd.map((item, index) => (
						<div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
							<div className="card" style={{ minWidth: '200px' }}>
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
					<NoResults />
				)}
			</div>
		</div>
	);
};

export default ListPodcast;
