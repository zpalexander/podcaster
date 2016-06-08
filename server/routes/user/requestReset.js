'use strict';
/**
 * requestReset.js
 *
 * Logic to request a new password
 * reset token for a user
 */
/* Dependencies */
const User = require('../../models/User');
const { generateResetPasswordTokenAsync } = require('./passwordCrypto');
const sendPasswordEmail = require('./sendPasswordEmail');

/* Module Exports */
module.exports = requestReset;

/* Logic */
function requestReset(username, appUrl, isNew) {
    return generateResetPasswordTokenAsync()
        .then(token => saveUserToken(username, token))
        .then(user => sendPasswordEmail(user.username, appUrl, user.resetPasswordToken, isNew));
}


function saveUserToken(username, resetToken) {
    const updateOptions = {
        conditions: {username: username},
        update: {
            resetPasswordToken: resetToken.token,
            resetPasswordExpires: resetToken.expiresAt
        }
    };
    return User.updateAsync(updateOptions.conditions, updateOptions.update);
};
