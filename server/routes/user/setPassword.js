'use strict';
/**
 * setPassword.js
 *
 * Logic to set a user's
 * password to a new value
 */
/* Dependencies */
// Libraries
const validator = require('validator');
const { hashAndSetPassword, signJwt } = require('./passwordCrypto');
// Models
const User = require('../../models/User');
const Profile = require('../../models/Profile');
// Constants
const errors = require('../../util/errors');

/* Module exports */
module.exports = setPassword;

/* Logic */
function setPassword(username, resetToken, newPassword) {
     if (!validator.isEmail(username)) { return errors.invalidEmailAddress; }

    return User.findByUsernameAsync(username.toLowerCase())
        .then(user => checkUserAndSetPass(user, resetToken, newPassword))
        .then(clearResetToken)
        .then(user => signJwt(Profile(user.username, user.feeds)))
        .catch(err => err);
}


function checkUserAndSetPass(user, resetToken, newPassword) {
    if (user.resetPasswordToken === '') {
        throw errors.expiredToken;
    }
    if (user.resetPasswordToken !== resetToken) {
        throw errors.accessDenied;
    }
    if (user.resetPasswordExpires < new Date()) {
        throw errors.expiredToken;
    }
    return hashAndSetPassword(user, newPassword);
}

function clearResetToken(user) {
    user.resetPasswordToken = '';
    user.resetPasswordExpires = null;
    return user.saveAsync();
}
