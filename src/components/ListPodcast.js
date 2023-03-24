import React, { useEffect, useState } from 'react';

import podcastService from '../services/podcastService';

const ListPodcast = () => {
	const pdService = new podcastService();
	const [listPd, setListPd] = useState([]);

	useEffect(() => {
		const getPd = async () => {
			const result = await pdService.getPodcasts();
			setListPd(result);
		};
		getPd();
	}, []);

	return (
		<div className="container">
			<div className="row">
				{listPd.map((item, index) => (
					<div key={index} className="col-lg-3 col-md-6 col-sm-12 mb-4">
						<div className="card" style={{ minWidth: '200px' }}>
							<img
								className="card-img-top"
								src={item['im:image'][2]}
								alt="character"
							/>
							<div className="card-body text-center">
								<h5 className="card-title">{item['im:name'].label}</h5>
								<p className="card-text">Author: {item['im:artist'].label}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ListPodcast;
