'use strict';
/**
 * login.js
 *
 * Logic for a user to log in
 * with a username and password
 */
/* Dependencies */
// Libraries
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const log = require('../../middleware/logger');
const { signJwt } = require('./passwordCrypto')
// Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
// Constants
const secret = require('../../../secret.json');
const errors = require('../../util/errors');


/* Module Exports */
module.exports = login;

/* Logic */
function login(username, password) {
    return User.findByUsernameAsync(username)
        .then(user => {
            if (user === null) { throw errors.notFound; }
            return verifyPassword(secret, user, password);
        })
        .then(verificationRes => {
            if (verificationRes instanceof Error) { throw verificationRes; }
            return { token: verificationRes.user, user: verificationRes.token };
        })
        .catch(err => {
            log.error('Error logging in: ', err);
            return err;
        });
}

function verifyPassword(secret, user, password) {
    return bcrypt.compareAsync(password, user.passwordHash)
        .then(isVerified => {
            if (!isVerified) { throw errors.accessDenied; }
            const token = signJwt(Profile(user.username, user.feeds));
            return {token: token, user: user};
        });
}
