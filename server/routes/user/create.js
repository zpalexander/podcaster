'use strict';
/**
 * create.js
 *
 * Logic to create a new
 * user for the application
 */
/* Dependencies */
const { generateResetPasswordTokenAsync } = require('./passwordCrypto');
const User = require('../../models/User');

/* Module Exports */
module.exports = create;

/* Logic */
function create(username) {
    return generateResetPasswordTokenAsync()
        .then(token => {
            var user = new User({
                username: username.toLowerCase(),
                passwordHash: '',
                resetPasswordToken: token.tokenBody,
                resetPasswordExpires: token.expiresAt
            });
            return user.saveAsync();
        });
}
