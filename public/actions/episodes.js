/**
 * episodes.js
 *
 * Actions for the episodes reducer
 */

/* Dependencies */
// Libraries
import fetch from 'isomorphic-fetch';
// Constants
import * as types from '../constants/ActionTypes'


/* Actions */
export function UItoggleUnplayed(episodeName) {
    return {
        type: types.TOGGLE_UNPLAYED,
        episode: episodeName
    }
};

export function toggleUnplayed(unplayedStatus, episodeName) {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/episode/toggleUnplayed';
    const body = {
        unplayedStatus: unplayedStatus,
        episodeName: episodeName
    };
    const fetchOptions = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    };
    return dispatch => {
        dispatch(UItoggleUnplayed(episodeName));
        return fetch(uri, fetchOptions);
    };
};

export function setActiveEpisode(episode) {
    return {
        type: types.SET_ACTIVE_EPISODE,
        episode: episode
    }
};

export function unsetActiveEpisode() {
    return {
        type: types.UNSET_ACTIVE_EPISODE
    }
};

export function requestEpisodes() {
    return {
        type: types.REQUEST_EPISODES
    }
};

export function receiveEpisodes(episodes) {
    return {
        type: types.RECEIVE_EPISODES,
        episodes: episodes
    }
};

export function fetchEpisodes() {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/episodes';
    return dispatch => {
        dispatch(requestEpisodes());
        return fetch(uri)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveEpisodes(json))
            });
    }
};
