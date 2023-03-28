import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const SideBar = () => {
	const { idPodcast, idEpisode } = useParams();
	const navigate = useNavigate();
	const { feedPodcast } = useSelector((state) => state.podcast);

	const onclickSidebar = () => {
		if (idEpisode) {
			navigate(`/podcast/${idPodcast}/`);
		}
	};

	return (
		<div className="card" style={{ minWidth: '200px', maxHeight: '600px' }}>
			<img
				className="card-img-top cursorPointer"
				alt="podcast"
				src={feedPodcast['itunes:image'][0].$.href}
				onClick={onclickSidebar}
			/>
			<div className="card-body text-center descriptionScrollbar">
				<h5 className="card-title">{feedPodcast.title[0]}</h5>
				<p className="card-text cursorPointer" onClick={onclickSidebar}>
					by {feedPodcast['itunes:author'][0]}
				</p>
				<hr />
				<h6 className="card-title">Description:</h6>
				<p className="card-text">{feedPodcast.description[0]}</p>
			</div>
		</div>
	);
};

export default SideBar;
