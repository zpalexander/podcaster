/**
 * InitialState.js
 *
 * Initial State of the application
 */
import { SHOW_ALL } from './Filters';

const initialState = {
    feeds: [],
    episodes: [],
    activeFeed: SHOW_ALL,
    activeEpisode: ''
};

export default initialState;
