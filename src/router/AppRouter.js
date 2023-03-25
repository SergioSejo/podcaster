import { Route, Routes } from 'react-router-dom';

import { ListPodcastRoutes } from '../routes/ListPodcastRoutes';
import { DetailPodcastRoutes } from '../routes/DetailPodcastRoutes';

import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

export const AppRouter = () => {
	return (
		<>
			<Navbar title="Podcaster" />
			<Routes>
				<Route path="/" element={<ListPodcastRoutes />} />
				<Route path="/podcast/:id" element={<DetailPodcastRoutes />} />
			</Routes>
			<Footer text="Sergio Jiménez Yébenes" />
		</>
	);
};
