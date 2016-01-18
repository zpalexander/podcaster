/**
 * feeds.js
 *
 * Actions for the feeds reducer
 */

/* Dependencies */
import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';


/* Actions */
export function setActiveFeed(feed) {
    return {
        type: types.SET_ACTIVE_FEED,
        feed: feed
    }
};

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
    return dispatch => {
        dispatch(requestFeeds())
        return fetch('/feeds')
            .then(response => response.json())
            .then(json => dispatch(receiveFeeds(json)))
    }
};

