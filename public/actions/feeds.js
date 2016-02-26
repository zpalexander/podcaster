/**
 * feeds.js
 *
 * Actions for the feeds reducer
 */

/* Dependencies */
// Libraries
import fetch from 'isomorphic-fetch';
// Constants
import * as types from '../constants/ActionTypes';


/* Actions */

// Active Feed
export function setActiveFeed(feed) {
    return {
        type: types.SET_ACTIVE_FEED,
        feed: feed
    }
};

// Fetch Feeds
export function requestFeeds() {
    return {
        type: types.REQUEST_FEEDS
    }
};

export function receiveFeeds(feeds) {
    return {
        type: types.RECEIVE_FEEDS,
        feeds: feeds
    }
};

export function fetchFeeds() {
    const origin = (typeof(window) !== 'undefined') ? window.location.origin : 'http://localhost:3000';
    const uri = origin + '/api/feeds';
    return dispatch => {
        dispatch(requestFeeds())
        return fetch(uri)
            .then(response => response.json())
            .then(json => dispatch(receiveFeeds(json)))
    }
};

