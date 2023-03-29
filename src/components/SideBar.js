import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateEpisode } from '../actions/podcast';

import parse from 'html-react-parser';

const SideBar = () => {
	const { idPodcast, idEpisode } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { feedPodcast, episode } = useSelector((state) => state.podcast);

	const onclickSidebar = () => {
		if (idEpisode) {
			navigate(`/podcast/${idPodcast}/`);
			dispatch(updateEpisode(null));
		}
	};

	return (
		<div className="card" style={{ minWidth: '200px', maxHeight: '600px' }}>
			<img
				className={`card-img-top ${episode && 'cursorPointer'}`}
				alt="podcast"
				src={feedPodcast['itunes:image'][0].$.href}
				onClick={onclickSidebar}
			/>
			<div className="card-body text-center descriptionScrollbar">
				<h5 className="card-title">{feedPodcast.title[0]}</h5>
				<p
					className={`card-text ${episode && 'cursorPointer'}`}
					onClick={onclickSidebar}
				>
					by {feedPodcast['itunes:author'][0]}
				</p>
				<hr />
				<h6 className="card-title">Description:</h6>
				<p className="card-text">{parse(feedPodcast.description[0])}</p>
			</div>
		</div>
	);
};

export default SideBar;
