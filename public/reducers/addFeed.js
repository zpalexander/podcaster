/**
 * addFeed.js
 *
 * Reducer for the add feed view
 */

/* Constants */
import { HANDLE_ADD_FEED_INPUT, CLEAR_FEED_INPUT, REQUEST_ADD_NEW_FEED, COMPLETE_ADD_NEW_FEED } from '../constants/ActionTypes';
import { NEW_FEED_NAME, NEW_FEED_URL, NEW_FEED_CATEGORY } from '../constants/FieldNames';
import initialState from '../constants/InitialState';

/* Reducer */
export default function episodes(state = initialState.addFeed, action) {
    switch(action.type) {
        case HANDLE_ADD_FEED_INPUT:
            if (action.field === NEW_FEED_NAME) {
                return Object.assign({}, state, {
                    newFeedName: action.text
                });
            } else if (action.field === NEW_FEED_URL) {
                return Object.assign({}, state, {
                    newFeedURL: action.text
                });
            } else if (action.field === NEW_FEED_CATEGORY) {
                return Object.assign({}, state, {
                    newFeedCategory: action.text
                });
            }
            break;

        case CLEAR_FEED_INPUT:
            return Object.assign({}, state, {
                newFeedName: '',
                newFeedURL: '',
                newFeedCategory: ''
            });
            break;

        case REQUEST_ADD_NEW_FEED:
            return Object.assign({}, state, {
                isAdding: true
            });
            break;

        case COMPLETE_ADD_NEW_FEED:
            return Object.assign({}, state, {
                isAdding: false
            });
            break;

        default:
            return state;
            break;
    };
};
