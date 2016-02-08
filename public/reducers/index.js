/**
 * index.js
 *
 * Entry point for all reducers
 */
import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import feeds from './feeds';
import episodes from './episodes';
import activeFeed from './activeFeed';
import activeEpisode from './activeEpisode';

const rootReducer = combineReducers({
    feeds,
    episodes,
    activeFeed,
    activeEpisode,
    routing: routeReducer
});

export default rootReducer;
