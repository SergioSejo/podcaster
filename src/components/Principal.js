import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import { ListPodcastRoutes } from '../routes/ListPodcastRoutes';
import { DetailPodcastRoutes } from '../routes/DetailPodcastRoutes';

import { pages } from '../helpers/pages';

export const Principal = () => {
	const { pageActive } = useSelector((state) => state.podcast);

	return (
		<>
			<Navbar title="Podcaster" />
			<Routes>
				{pageActive === pages.detailPodcast ? (
					<Route path="//podcast/:id" element={<DetailPodcastRoutes />} />
				) : pageActive === pages.episodes ? (
					<ListPodcastRoutes />
				) : (
					<ListPodcastRoutes />
				)}
			</Routes>
			<Footer text="Sergio Jiménez Yébenes" />
		</>
	);
};
