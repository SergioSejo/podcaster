import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { formatDate, getIdEpisode } from '../helpers/functions';
import { getDetailPodcast, getEpisode } from '../actions/podcast';
import SideBar from './SideBar';
import NoResults from './ui/NoResults';

const DetailPodcast = () => {
	const { idPodcast } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { feedPodcast, isloading } = useSelector((state) => state.podcast);

	useEffect(() => {
		if (!feedPodcast) {
			dispatch(getDetailPodcast(idPodcast));
		}
	}, []);

	const onclickEpisode = (event, key) => {
		let id = getIdEpisode(key);
		dispatch(getEpisode(feedPodcast.item, id));
		navigate(`/podcast/${idPodcast}/episode/${id}`);
	};

	return (
		<div
			className="container"
			style={{ marginTop: '30px', marginBottom: '10px' }}
		>
			{feedPodcast ? (
				<div className="row">
					<div className="col-lg-3">
						<SideBar />
					</div>
					<div className="col-lg-9">
						<div className="card row">
							<h3 className="episodes">Episodes: {feedPodcast.item.length}</h3>
						</div>
						<div className="card row">
							<div className="episodes">
								<div className="episodeScrollbar">
									<table className="table table-striped table-hover">
										<thead>
											<tr>
												<th className="col-7">Title</th>
												<th className="col-3">Date</th>
												<th className="col-2">Duration</th>
											</tr>
										</thead>
										<tbody>
											{feedPodcast.item?.length > 0 ? (
												feedPodcast.item?.map((item) => (
													<tr key={item.guid[0]._}>
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
				</div>
			) : (
				!isloading && <NoResults text="El id del podcast es incorrecto" />
			)}
		</div>
	);
};

export default DetailPodcast;
