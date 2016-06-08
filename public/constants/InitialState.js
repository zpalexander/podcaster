/**
 * InitialState.js
 *
 * Initial State of the application
 */

import { SHOW_ALL } from './Filters';

const initialState = {
    feeds: [],
    episodes: [],
    activeFeed: SHOW_ALL,
    activeEpisode: '',
    refreshFeed: false,
    addFeed: {
        newFeedName: '',
        newFeedURL: '',
        newFeedCategory: '',
        isAdding: false
    },
    // Auth
    login: {
        isLoggedIn: false,
        isLoggingIn: false,
        authToken: '',
        invalidCreds: false,
        username: '',
        password: '',
        resetUsername: '',
        newPassword: '',
        repeatPassword: '',
        passwordsMatch: null
    }
};

export default initialState;
