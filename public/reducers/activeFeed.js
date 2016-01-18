/**
 * activeFeed.js
 *
 * Reducer for the activeFeed
 * state property
 */

/* Constants */
import { SET_ACTIVE_FEED } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

/* Reducer */
export default function activeFeed(state = initialState.activeFeed, action) {
    switch (action.type) {
        case SET_ACTIVE_FEED:
            return action.feed;
            break;

        default:
            return state;
            break;
    }
};
