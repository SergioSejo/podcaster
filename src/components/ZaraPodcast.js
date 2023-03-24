import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ListPodcast from './ListPodcast';

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
