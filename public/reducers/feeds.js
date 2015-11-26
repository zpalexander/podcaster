import { ADD_FEED, UPDATE_FEED, DELETE_FEED, REQUEST_FEEDS, RECEIVE_FEEDS } from '../constants/ActionTypes';

const initialState = [];

export default function feeds(state = initialState, action) {
    switch (action.type) {
        case ADD_FEED:
            return [
                {
                    feedID: action.feedID,
                    name: action.name,
                    url: action.url,
                    category: action.category
                },
                ...state
            ];
            break;

        case UPDATE_FEED:
            return [

            ];
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
            return Object.assign({}, state, {
                feeds: action.feeds
            });
            break;

        default:
            return state;
            break;
    }
}
