import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { formatDate } from '../../helpers/functions';
import { getDetailPodcast } from '../../actions/podcast';
import NoResults from '../ui/NoResults';

const DetailPodcast = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const [photo, setPhoto] = useState([]);
	const [title, setTitle] = useState([]);
	const [artist, setArtist] = useState([]);
	const [description, setDescription] = useState([]);
	const [episodes, setEpisodes] = useState([]);
	const [count, setCount] = useState([]);
	const { feedPodcast } = useSelector((state) => state.podcast);

	useEffect(() => {
		dispatch(getDetailPodcast(id));
	}, []);

	useEffect(() => {
		if (feedPodcast) {
			setCount(feedPodcast.item.length);
			setPhoto(feedPodcast['itunes:image'][0].$.href);
			setTitle(feedPodcast.title[0]);
			setArtist(feedPodcast['itunes:author'][0]);
			setDescription(feedPodcast.description[0]);
			setEpisodes(feedPodcast.item);
			console.log('feedPodcast.item: ', feedPodcast.item);
		}
	}, [feedPodcast]);

	const onclickEpisode = (event, key) => {
		console.log('key: ', key);
	};

	return (
		<div
			className="container"
			style={{ marginTop: '30px', marginBottom: '10px' }}
		>
			{feedPodcast ? (
				<div className="row">
					<div className="col-lg-3">
						<div
							className="card"
							style={{ minWidth: '200px', maxHeight: '600px' }}
						>
							<img className="card-img-top" alt="podcast" src={photo} />
							<div className="card-body text-center descriptionScrollbar">
								<h5 className="card-title">{title}</h5>
								<p className="card-text">by {artist}</p>
								<hr />
								<h6 className="card-title">Description:</h6>
								<p className="card-text">{description}</p>
							</div>
						</div>
					</div>
					<div className="col-lg-9">
						<div className="card row">
							<h3 className="episodes">Episodes: {count}</h3>
						</div>
						<div className="card row">
							<div className="episodes">
								<table className="table table-striped table-hover table-wrapper-scroll episodeScrollbar">
									<thead>
										<tr>
											<th className="col-7">Title</th>
											<th className="col-3">Date</th>
											<th className="col-2">Duration</th>
										</tr>
									</thead>
									<tbody>
										{episodes?.length > 0 ? (
											episodes?.map((item) => (
												<tr>
													<td>
														<a
															className="cursorPointer"
															onClick={(event) =>
																onclickEpisode(event, item.guid[0])
															}
														>
															{item.title[0]}
														</a>
													</td>
													<td>{formatDate(item.pubDate[0])}</td>
													<td>{item['itunes:duration']}</td>
												</tr>
											))
										) : (
											<tr>
												<td>No hay resultados</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			) : (
				<NoResults text="El id del podcast es incorrecto" />
			)}
		</div>
	);
};

export default DetailPodcast;
