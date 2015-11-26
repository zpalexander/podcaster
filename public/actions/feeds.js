import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

// export function addFeed(feedID, name, url, category) {
//     return {
//         type: types.ADD_FEED,
//         feedID,
//         name,
//         url,
//         category
//     }
// }

// export function updateFeed(feedID) {
//     return {
//         type: types.UPDATE_FEED,
//         feedID
//     }
// }

// export function deleteFeed(feedID) {
//     return {
//         type: types.DELETE_FEED,
//         feedID
//     }
// }


export function requestFeeds() {
    return {
        type: types.REQUEST_FEEDS
    }
}

export function receiveFeeds(feeds) {
    console.log('receive feeds', feeds);
    return {
        type: types.RECEIVE_FEEDS,
        feeds: feeds,
    }
}

export function fetchFeeds() {
    return dispatch => {
        dispatch(requestFeeds())
        return fetch('/feeds')
            .then(response => response.json())
            .then(json => dispatch(receiveFeeds(json)))
    }
}

