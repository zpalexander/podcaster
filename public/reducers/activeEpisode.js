/**
 * activeEpisode.js
 *
 * Reducer for the activeEpisode
 * state property
 */

/* Constants */
import { SET_ACTIVE_EPISODE, UNSET_ACTIVE_EPISODE } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

/* Reducer */
export default function activeEpisode(state = initialState.activeEpisode, action) {
    switch(action.type) {
        case SET_ACTIVE_EPISODE:
            return action.episode;
            break;

        case UNSET_ACTIVE_EPISODE:
            return null;
            break;

        default:
            return state;
            break;
    }
};
