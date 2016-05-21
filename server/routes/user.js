'use strict';
/**
 * user.js
 *
 * Route handlers for user operations
 */
/* Dependencies */
const errors = require('../util/errors');
const create = require('./user/create');
const login = require('./user/login');

/* Module Exports */
exports.create = createUser;
exports.login = loginUser;

/* Route Handlers */
function createUser(req, res) {
    const username = req.body.username;
    if (!validateEmail(username)) {
        res.status(errors.invalidEmailAddress.status).send(errors.invalidEmailAddress);
    }
    create(username)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(err.status).send(err));
}


function loginUser(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    login(username, password)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(err.status).send(err));
}


/* Helpers */
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
