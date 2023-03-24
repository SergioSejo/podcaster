import axios from 'axios';

const url =
	'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

class podcastService {
	getPodcasts = async () => {
		try {
			const res = await axios.get(url);
			console.log(res);
			return res.data.feed.entry;
		} catch (ex) {
			console.log('podcastService.getPodcasts: ', ex);
			return null;
		}
	};
}

export default podcastService;
