/**
 * episodes.js
 *
 * Reducer for the episodes
 * state property
 */

/* Constants */
import { TOGGLE_UNPLAYED, REQUEST_EPISODES, RECEIVE_EPISODES } from '../constants/ActionTypes';
import initialState from '../constants/InitialState';

/* Reducer */
export default function episodes(state = initialState.episodes, action) {
    var newState;
    switch(action.type) {
        case TOGGLE_UNPLAYED:
            newState = state.map((episode) => {
                var modifiedEpisode;
                if (episode._id === action.episode) {
                    modifiedEpisode = Object.assign({}, episode, {
                        unplayed: !episode.unplayed
                    });
                } else {
                    modifiedEpisode = episode;
                }
                return modifiedEpisode;
            });
            console.log(newState);
            return newState;
            break;

        case REQUEST_EPISODES:
            return state;
            break;

        case RECEIVE_EPISODES:
            return action.episodes;
            break;

        default:
            return state;
            break;
    }
};
