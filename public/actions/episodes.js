/**
 * episodes.js
 *
 * Actions for the episodes reducer
 */

/* Dependencies */
import * as types from '../constants/ActionTypes'


/* Actions */
export function toggleUnplayed(episodeName) {
    return {
        type: types.TOGGLE_UNPLAYED,
        episode: episodeName
    }
}

export function setActiveEpisode(episode) {
    return {
        type: types.SET_ACTIVE_EPISODE,
        episode: episode
    }
}

export function unsetActiveEpisode() {
    return {
        type: types.UNSET_ACTIVE_EPISODE
    }
}

export function requestEpisodes() {
    return {
        type: types.REQUEST_EPISODES
    }
}

export function receiveEpisodes(episodes) {
    return {
        type: types.RECEIVE_EPISODES,
        episodes: episodes
    }
}

export function fetchEpisodes() {
    return dispatch => {
        dispatch(requestEpisodes());
        return fetch('/episodes')
            .then(response => response.json())
            .then(json => {
                dispatch(receiveEpisodes(json))
            });
    }
}
