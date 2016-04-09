/**
 * refreshFeed.js
 *
 * Reducer for refreshFeed property
 */

/* Constants */
import { REQUEST_REFRESH, COMPLETE_REFRESH } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';


/* Reducer */
export default function feeds(state = initialState.refreshFeed, action) {
    switch (action.type) {
        case REQUEST_REFRESH:
            return true;
            break;

        case COMPLETE_REFRESH:
            return false;
            break;

        default:
            return state;
            break;
    }
};
