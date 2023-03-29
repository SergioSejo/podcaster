import { types } from '../types/types';

import podcastService from '../services/podcastService';
import {
	needGetListPodcasts,
	needGetDetailPodcast,
	getIdEpisode,
} from '../helpers/functions';

const convertXMLtoJson = require('xml2js');

export const getPodcasts = () => {
	return async (dispatch) => {
		let list;
		dispatch(changeLoading(true));
		if (needGetListPodcasts()) {
			const pdService = new podcastService();
			list = await pdService.get100PodcastsApple();
			localStorage.clear();
		} else {
			list = JSON.parse(localStorage.getItem('list-podcasts'));
		}
		localStorage.setItem('list-podcasts', JSON.stringify(list));
		localStorage.setItem('lastTime-get-podcasts', new Date().getTime());
		dispatch(updateListPodcasts(list));
	};
};

export const updateListPodcasts = (list) => {
	return {
		type: types.getPodcasts,
		payload: list,
	};
};

export const getDetailPodcast = (id) => {
	return async (dispatch) => {
		let detail;
		dispatch(changeLoading(true));
		if (needGetDetailPodcast(id)) {
			const pdService = new podcastService();
			detail = await pdService.getDetailPodcast(id);
			if (detail) {
				localStorage.setItem(`detail-podcast-${id}`, JSON.stringify(detail));
				localStorage.setItem(`lastTime-get-detail-${id}`, new Date().getTime());
				dispatch(updateDetailPodcast(detail));
				dispatch(getFeedPodcast(detail.feedUrl));
			} else {
				dispatch(updateDetailPodcast(null));
				dispatch(changeLoading(false));
			}
		} else {
			detail = JSON.parse(localStorage.getItem(`detail-podcast-${id}`));
			dispatch(updateDetailPodcast(detail));
			dispatch(getFeedPodcast(detail.feedUrl));
		}
	};
};

export const updateDetailPodcast = (detail) => {
	return {
		type: types.detailPodcast,
		payload: detail,
	};
};

export const getFeedPodcast = (url) => {
	return async (dispatch) => {
		const pdService = new podcastService();
		const episodes = await pdService.getFeedPodcast(url);
		convertXMLtoJson.parseString(episodes, function (err, result) {
			let feed = result?.rss.channel[0];
			dispatch(updateFeedPodcast(feed));
		});
	};
};

export const updateFeedPodcast = (feed) => {
	return {
		type: types.feedPodcast,
		payload: feed,
	};
};

export const getEpisode = (listEpisodes, idEpisode) => {
	return async (dispatch) => {
		let result = listEpisodes.filter((option) => {
			let compareGuid = getIdEpisode(option.guid[0]);
			return idEpisode == compareGuid;
		});
		let episode = result ? result[0] : null;
		dispatch(updateEpisode(episode));
	};
};

export const updateEpisode = (episode) => {
	return {
		type: types.getEpisode,
		payload: episode,
	};
};

export const changeLoading = (mode) => {
	return {
		type: types.changeLoading,
		payload: mode,
	};
};

export const setEnvironment = (mode) => {
	return {
		type: types.setEnvironment,
		payload: mode,
	};
};

export const reset = () => {
	return {
		type: types.reset,
	};
};
