import { SET_ACTIVE_EPISODE, UNSET_ACTIVE_EPISODE } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

export default function activeEpisode(state = initialState.activeEpisode, action) {
    switch(action.type) {
        case SET_ACTIVE_EPISODE:
            return state = action.episode;
            break;

        case UNSET_ACTIVE_EPISODE:
            return state = null;
            break;

        default:
            return state;
            break;
    }
}
