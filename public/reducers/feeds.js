/**
 * feeds.js
 *
 * Reducer for the feeds
 * state property
 */

/* Constants */
import { ADD_FEED, UPDATE_FEED, DELETE_FEED, REQUEST_FEEDS, RECEIVE_FEEDS } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';


/* Reducer */
export default function feeds(state = initialState.feeds, action) {
    switch (action.type) {
        case ADD_FEED:
            return state.push(
                {
                    feedID: action.feedID,
                    name: action.name,
                    url: action.url,
                    category: action.category
                },
                ...state
            );
            break;

        case UPDATE_FEED:
            return state;
            break;

        case DELETE_FEED:
            return state.filter(feed =>
                feed.feedID !== action.feedID
            );
            break;

        case REQUEST_FEEDS:
            return state;
            break;

        case RECEIVE_FEEDS:
            return action.feeds;
            break;

        default:
            return state;
            break;
    }
}
