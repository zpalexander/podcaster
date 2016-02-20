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
export function UItoggleUnplayed(episodeIDs) {
    return {
        type: types.TOGGLE_UNPLAYED,
        episodeIDs: episodeIDs
    }
};

export function toggleUnplayed(unplayedStatus, episodeIDs) {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/api/episode/toggleUnplayed';
    const body = {
        unplayedStatus: unplayedStatus,
        episodeIDs: episodeIDs
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
        dispatch(UItoggleUnplayed(episodeIDs));
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
    const uri = origin + '/api/episodes';
    return dispatch => {
        dispatch(requestEpisodes());
        return fetch(uri)
            .then(response => response.json())
            .then(json => {
                dispatch(receiveEpisodes(json))
            });
    }
};
