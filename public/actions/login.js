/**
 * login.js
 *
 * Actions for the login form
 */
/* Dependencies */
import * as types from '../constants/ActionTypes';
import { pushPath } from 'redux-simple-router';
import fetch from 'isomorphic-fetch';

/* Actions */
export function logInSuccess(username, result) {
    return {
        type: types.LOGIN_SUCCESS,
        username: username,
        authToken: result.token
    };
};

export function logInFail() {
    return {
        type: types.LOGIN_FAIL
    }
};

export function logOut() {
    return {
        type: types.LOG_OUT
    };
};

export function isLoggingIn() {
    return {
        type: types.IS_LOGGING_IN
    };
}

export function authenticate(username, password) {
    var uri = 'api/user/login';
    var fetchOptions = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    };
    return dispatch => {
        dispatch(isLoggingIn());
        return fetch(uri, fetchOptions)
            .then(response => response.json())
            .then(result => {
                if (result.status !== 200) { throw new Error(); }
                window.sessionStorage.token = result.token;
                dispatch(logInSuccess(username, result));
                dispatch(pushPath('/feeds'));
            })
            .catch(() => dispatch(logInFail()));
    };
};

export function handleLoginInput(field, value) {
    return {
        type: types.HANDLE_LOGIN_INPUT,
        field: field,
        value: value
    };
};
