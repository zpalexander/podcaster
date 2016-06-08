/**
 * login.js
 *
 * Reducer for 'login' actions
 */
/* Actions and Initial State */
import { LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, IS_LOGGING_IN, HANDLE_LOGIN_INPUT, COMPLETE_PASS_RESET_EMAIL } from '../constants/ActionTypes';
import { USERNAME, PASSWORD, RESET_USERNAME, NEW_PASSWORD, REPEAT_PASSWORD } from '../constants/FieldNames';
import initialState from '../constants/InitialState';

export default function login(state = initialState.login, action) {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                username: action.username,
                isLoggedIn: true,
                authToken: action.authToken,
                isLoggingIn: false
            });
            break;

        case LOGIN_FAIL:
            return Object.assign({}, state, {
                invalidCreds: true,
                isLoggingIn: false
            });
            break;

        case LOG_OUT:
            return initialState.login;
            break;

        case IS_LOGGING_IN:
            return Object.assign({}, state, {
                isLoggingIn: true
            });
            break;

        case HANDLE_LOGIN_INPUT:
            let newVal;
            if (action.field === USERNAME) {
                newVal = { username: action.value };
            } else if (action.field === PASSWORD) {
                newVal = { password: action.value };
            } else if (action.field === RESET_USERNAME) {
                newVal = { resetUsername: action.value };
            } else if (action.field === NEW_PASSWORD) {
                newVal = { newPassword: action.value };
            } else if (action.field === REPEAT_PASSWORD) {
                if (state.newPassword === action.value) {
                    newVal = {
                        repeatPassword: action.value,
                        passwordsMatch: true
                    }
                } else {
                    newVal = {
                        repeatPassword: action.value,
                        passwordsMatch: false
                    }
                }
            }
            return Object.assign({}, state, newVal);
            break;

        case COMPLETE_PASS_RESET_EMAIL:
            return Object.assign({}, state, {
                resetUsername: ''
            });
            break;

        default:
            return state;
            break;
    };
};
