import { SET_ACTIVE_EPISODE } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

export default function episodes(state = initialState.activeEpisode, action) {
    switch(action.type) {
        case SET_ACTIVE_EPISODE:
            return state = action.episode;
            break;

        default:
            return state;
            break;
    }
}
