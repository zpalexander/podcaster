import { TOGGLE_UNPLAYED, REQUEST_EPISODES, RECEIVE_EPISODES } from '../constants/ActionTypes';

const initialState = [];

export default function episodes(state = initialState, action) {
    switch(action.type) {
        case TOGGLE_UNPLAYED:
            return state;
            break;

        case REQUEST_EPISODES:
            console.log('request episodes hit');
            return state;
            break;

        case RECEIVE_EPISODES:
            console.log(action.episodes);
            return Object.assign({}, state, {
                episodes: action.episodes
            });
            break;

        default:
            return state;
            break;
    }
}
