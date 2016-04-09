/**
 * refreshFeed.js
 *
 * Actions for refreshFeed reducer
 */
/* Dependencies */
// Libraries
import fetch from 'isomorphic-fetch';
// Constants
import * as types from '../constants/ActionTypes';
// Actions
import { fetchEpisodes } from './episodes';


// Refresh Feed Episodes
export function requestRefresh() {
    return {
        type: types.REQUEST_REFRESH
    }
};

export function completeRefresh(result) {
    return {
        type: types.COMPLETE_REFRESH,
        result: result
    };
};

export function refreshFeeds(feedIDs) {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/api/feed/update';
    const body = {
        _ids: feedIDs
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
        dispatch(requestRefresh())
        return fetch(uri, fetchOptions)
            .then(response => {
                window.setTimeout(() => {
                    dispatch(completeRefresh(response));
                    dispatch(fetchEpisodes());
                }, 1000)
            })
    }
};
