import { types } from '../types/types';

const initialState = {
	isloading: false,
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
				isloading: false,
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
				isloading: false,
			};
		case types.getEpisode:
			return {
				...state,
				episode: action.payload,
			};
		case types.changeLoading:
			return {
				...state,
				isloading: action.payload,
			};
		case types.reset:
			return {
				...state,
				detailPodcast: null,
				feedPodcast: null,
				episode: null,
			};
		default:
			return state;
	}
};
