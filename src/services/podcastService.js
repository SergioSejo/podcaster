import axios from 'axios';

const url =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const urlDetail = 'https://itunes.apple.com/lookup?id=';

class podcastService {
	get100PodcastsApple = async () => {
		try {
			const res = await axios.get(url);
			return res.data.feed.entry;
		} catch (ex) {
			console.log('podcastService.getPodcasts: ', ex);
			return null;
		}
	};

	getDetailPodcast = async (id) => {
		try {
			const res = await axios.get(`${urlDetail}${id}&country=no`);
			return res.data.results[0];
		} catch (ex) {
			console.log('podcastService.getPodcastDetail: ', ex);
			return null;
		}
	};
}

export default podcastService;
