/**
 * ActionTypes.js
 *
 * Definition of all action types
 */

// Feed actions
export const ADD_FEED = 'ADD_FEED';
export const UPDATE_FEED = 'UPDATE_FEED';
export const DELETE_FEED = 'DELETE_FEED';
export const SELECT_FEED = 'SELECT_FEED';
export const REQUEST_FEEDS = 'REQUEST_FEEDS';
export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';
export const SET_ACTIVE_FEED = 'SET_ACTIVE_FEED';

// Episode actions
export const TOGGLE_UNPLAYED = 'TOGGLE_UNPLAYED';
export const SET_ACTIVE_EPISODE = 'SET_ACTIVE_EPISODE';
export const UNSET_ACTIVE_EPISODE = 'UNSET_ACTIVE_EPISODE';
export const REQUEST_EPISODES = 'REQUEST_EPISODES';
export const RECEIVE_EPISODES = 'RECEIVE_EPISODES';

// Add Feed actions
export const HANDLE_ADD_FEED_INPUT = 'HANDLE_ADD_FEED_INPUT';
export const CLEAR_FEED_INPUT = 'CLEAR_FEED_INPUT';
export const REQUEST_ADD_NEW_FEED = 'REQUEST_ADD_NEW_FEED';
export const COMPLETE_ADD_NEW_FEED = 'COMPLETE_ADD_NEW_FEED';
