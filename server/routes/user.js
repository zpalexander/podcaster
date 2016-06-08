'use strict';
/**
 * user.js
 *
 * Route handlers for user operations
 */
/* Dependencies */
const validator = require('validator');
const errors = require('../util/errors');
const create = require('./user/create');
const login = require('./user/login');
const setPassword = require('./user/setPassword')
const requestReset = require('./user/requestReset');
const stringToBool = require('../util/stringToBool');


/* Module Exports */
exports.create = createUserHandler;
exports.login = loginUserHandler;
exports.setPassword = setUserPasswordHandler;
exports.requestResetToken = requestResetTokenHandler;


/* Route Handlers */
function createUserHandler(req, res) {
    const username = req.body.username;
    if (!validator.isEmail(username)) {
        res.status(errors.invalidEmailAddress.status).send(errors.invalidEmailAddress);
    }
    create(username)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(err.status).send(err));
}


function loginUserHandler(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    login(username, password)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(err.status).send(err));
}


function setUserPasswordHandler(req, res) {
    const username = req.body.username;
    const resetToken = req.body.token;
    const newPassword = req.body.newPassword;
    setPassword(username, resetToken, newPassword)
        .then(result => res.status(200).send(result))
        .catch(err => res.send(err));
}


function requestResetTokenHandler(req, res) {
    const username = req.body.username;
    const appUrl = req.body.appUrl;
    const isNew = req.body.isNew;
    if (!validator.isEmail(username)) {
        res.status(errors.invalidEmailAddress.status).send(errors.invalidEmailAddress);
    }
    if (!validator.isURL(appUrl)) {
        res.status(errors.badUserInput.status).send(errors.badUserInput);
    }
    requestReset(username, appUrl, stringToBool(isNew))
        .then(result => res.status(200).send(result))
        .catch(err => res.send(err));
}
