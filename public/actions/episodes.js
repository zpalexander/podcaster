import * as types from '../constants/ActionTypes'

export function toggleUnplayed(episodeName) {
    return { type: types.TOGGLE_UNPLAYED, episodeName }
}

export function requestEpisodes() {
    return {
        type: types.REQUEST_EPISODES
    }
}

export function receiveEpisodes(episodes) {
    return {
        type: types.RECEIVE_EPISODES,
        episodes: episodes,
    }
}

export function fetchEpisodes() {
    return dispatch => {
        dispatch(requestEpisodes());
        return fetch('/episodes')
            .then(response => response.json())
            .then(json => {
                //console.log(json);
                dispatch(receiveEpisodes(json))
            });
    }
}
