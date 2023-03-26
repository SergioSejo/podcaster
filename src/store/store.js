import { combineReducers } from 'redux';
import { podcastReducer } from '../reducers/podcastReducer';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const reducers = combineReducers({
	podcast: podcastReducer,
});

export const store = configureStore({
	reducer: reducers,
	middleware: [thunkMiddleware],
});
