import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDetailPodcast, getEpisode } from '../actions/podcast';
import SideBar from './SideBar';
import NoResults from './ui/NoResults';

const Episode = () => {
	const { idPodcast, idEpisode } = useParams();
	const dispatch = useDispatch();
	const { feedPodcast, episode } = useSelector((state) => state.podcast);

	useEffect(() => {
		if (!feedPodcast) {
			dispatch(getDetailPodcast(idPodcast));
		}
	}, []);

	useEffect(() => {
		if (feedPodcast) {
			dispatch(getEpisode(feedPodcast.item, idEpisode));
		}
	}, [feedPodcast]);

	return (
		<div
			className="container"
			style={{ marginTop: '30px', marginBottom: '10px' }}
		>
			{episode ? (
				<div className="row">
					<div className="col-lg-3">
						<SideBar />
					</div>
					<div className="col-lg-9">
						<div className="card row">
							<h3 className="episodes">{episode?.title[0]}</h3>
							<i>{episode.description[0]}</i>
							<audio controls className="audio">
								<source
									src={episode?.enclosure[0].$.url}
									type={episode.enclosure[0].$.type}
								/>
							</audio>
						</div>
					</div>
				</div>
			) : (
				<NoResults text="El id del episodio es incorrecto" />
			)}
		</div>
	);
};

export default Episode;
