import { types } from '../types/types';

const initialState = {
	listPodcasts: null,
	detailPodcast: null,
	pageActive: 0,
};

export const podcastReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.getPodcasts:
			return {
				...state,
				listPodcasts: action.payload,
			};
		case types.activePodcast:
			return {
				...state,
				pageActive: 1,
				detailPodcast: action.payload,
			};
		case types.resetPodcast:
			return {
				...state,
				pageActive: 0,
				detailPodcast: null,
			};
		default:
			return state;
	}
};
