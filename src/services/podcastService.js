import axios from 'axios';

const url =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

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
}

export default podcastService;
