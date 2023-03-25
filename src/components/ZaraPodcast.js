import React from 'react';
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import ListPodcast from './listPodcast/ListPodcast';

const ZaraPodcast = () => {
	return (
		<>
			<Navbar title="Podcaster" />
			<ListPodcast />
			<Footer text="Sergio Jiménez Yébenes" />
		</>
	);
};

export default ZaraPodcast;
