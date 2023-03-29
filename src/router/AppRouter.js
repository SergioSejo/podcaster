import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import { ListPodcastRoutes } from '../routes/ListPodcastRoutes';
import { DetailPodcastRoutes } from '../routes/DetailPodcastRoutes';
import { EpisodeRoutes } from '../routes/EpisodeRoutes';
import { useDispatch } from 'react-redux';
import { setEnvironment } from '../actions/podcast';

export const AppRouter = () => {
	const dispatch = useDispatch();
	dispatch(setEnvironment(process.env.REACT_APP_NO_RESULTS));
	return (
		<>
			<Navbar title="Podcaster" />
			<Routes>
				<Route path="/" element={<ListPodcastRoutes />} />
				<Route path="/podcast/:idPodcast" element={<DetailPodcastRoutes />} />
				<Route
					path="/podcast/:idPodcast/episode/:idEpisode"
					element={<EpisodeRoutes />}
				/>
			</Routes>
			<Footer text="Sergio Jiménez Yébenes" />
		</>
	);
};
