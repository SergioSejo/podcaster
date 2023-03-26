import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const DetailPodcast = () => {
	const [detail, setDetail] = useState([]);
	const { listPodcasts, detailPodcast } = useSelector((state) => state.podcast);

	useEffect(() => {
		if (detailPodcast) {
			setDetail(detailPodcast);
		} else {
			setDetail([]);
		}
	}, [detailPodcast]);

	return (
		<div className="container" style={{ marginTop: '30px' }}>
			<div className="row">
				<div className="col-lg-3">
					<div className="card" style={{ minWidth: '200px' }}>
						<img
							className="card-img-top"
							alt="podcast"
							src={detail.artworkUrl600}
						/>
						<div className="card-body text-center">
							<h5 className="card-title">{detail.trackName}</h5>
							<p className="card-text">by {detail.artistName}</p>
							<hr />
							<h6 className="card-title">Description:</h6>
							<p className="card-text">{detail.artistName}</p>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<div className="card row">
						<h3 className="episodes">Episodes: {detail.trackCount}</h3>
					</div>
					<div className="card row">
						<div className="episodes">Tabla</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DetailPodcast;
