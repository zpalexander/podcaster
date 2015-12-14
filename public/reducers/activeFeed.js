import { SET_ACTIVE_FEED } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

export default function activeFeed(state = initialState.activeFeed, action) {
    switch (action.type) {
        case SET_ACTIVE_FEED:
            return state = action.feed;
            break;

        default:
            return state;
            break;
    }
}
