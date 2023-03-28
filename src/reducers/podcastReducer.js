import { types } from '../types/types';

const initialState = {
	listPodcasts: null,
	detailPodcast: null,
	feedPodcast: null,
	episode: null,
};

export const podcastReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.getPodcasts:
			return {
				...state,
				listPodcasts: action.payload,
			};
		case types.detailPodcast:
			return {
				...state,
				detailPodcast: action.payload,
			};
		case types.feedPodcast:
			return {
				...state,
				feedPodcast: action.payload,
			};
		case types.getEpisode:
			return {
				...state,
				episode: action.payload,
			};
		default:
			return state;
	}
};
