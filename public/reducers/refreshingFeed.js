/**
 * refreshingFeed.js
 *
 * Reducer for refreshingFeed property
 */

/* Constants */
import { REQUEST_REFRESH, COMPLETE_REFRESH } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';


/* Reducer */
export default function feeds(state = initialState.refreshingFeed, action) {
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
