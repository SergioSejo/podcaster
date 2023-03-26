import { types } from '../types/types';

import podcastService from '../services/podcastService';
import { needCallApi } from '../helpers/functions';

export const getPodcasts = () => {
	return async (dispatch) => {
		let list;
		if (needCallApi()) {
			const pdService = new podcastService();
			list = await pdService.get100PodcastsApple();
			localStorage.setItem('list-podcasts', JSON.stringify(list));
			localStorage.setItem('lastTime-get-podcasts', new Date().getTime());
		} else {
			list = JSON.parse(localStorage.getItem('list-podcasts'));
		}
		localStorage.setItem('detail-podcasts', null);
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
		const pdService = new podcastService();
		const detail = await pdService.getDetailPodcast(id);
		localStorage.setItem('detail-podcasts', JSON.stringify(detail));
		dispatch(updateDetailPodcast(detail));
	};
};

export const updateDetailPodcast = (detail) => {
	return {
		type: types.activePodcast,
		payload: detail,
	};
};

export const reset = () => {
	return {
		type: types.resetPodcast,
	};
};
