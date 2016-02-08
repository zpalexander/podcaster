/**
 * addFeed.js
 *
 * Actions related to the AddFeed view
 */
/* Dependencies */
import fetch from 'isomorphic-fetch';
// Constants
import * as types from '../constants/ActionTypes';
// Actions
import { fetchFeeds } from './feeds';

/* Actions */
export function handleAddFeedInput(field, text) {
    return {
        type: types.HANDLE_ADD_FEED_INPUT,
        field: field,
        text: text
    };
};

export function clearFeedInput() {
    return {
        type: types.CLEAR_FEED_INPUT
    };
};

export function requestAddNewFeed() {
    return {
        type: types.REQUEST_ADD_NEW_FEED
    }
};

export function completeAddNewFeed(result) {
    return {
        type: types.COMPLETE_ADD_NEW_FEED,
        result: result
    }
};

export function addNewFeed(name, url, category) {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/api/feed/add';
        var body = {
        name: name,
        url: url,
        category: category
    };
    var fetchOptions = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            /*'Authorization': 'Bearer ' + window.sessionStorage.token*/
        },
        body: JSON.stringify(body)
    };
    return dispatch => {
        dispatch(requestAddNewFeed());
        return fetch(uri, fetchOptions)
            .then(result => {
                dispatch(completeAddNewFeed(result));
                dispatch(fetchFeeds());
                dispatch(clearFeedInput());
            });
    }
};
