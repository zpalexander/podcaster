'use strict';
/**
 * passwordCrypto.js
 *
 * Shared crypto operations necessary
 * for managing user password authentication
 */
/* Dependencies */
const Promise = require('bluebird');
const jwt = require('jsonwebtoken');
const crypto = Promise.promisifyAll(require('crypto'));
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const secret = require('../../../secret.json');

/* Module Exports */
exports.generateResetPasswordTokenAsync = generateResetPasswordTokenAsync;
exports.signJwt = signJwt;
exports.hashAndSetPassword = hashAndSetPassword;

/* Logic */
function generateResetPasswordTokenAsync() {
    var today = new Date();
    var expirationDate = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    return crypto.randomBytesAsync(20)
        .then(function(buf) {
            return {tokenBody: buf.toString('hex'), expiresAt: expirationDate};
        });
}

function signJwt(profile) {
    return jwt.sign(profile, secret, {expiresIn: '1d'}); //expires in 1 day
}


function hashAndSetPassword(user, password) {
    return bcrypt.genSaltAsync(10)
        .then(function(salt) {
            return salt;
        }).then(function(salt) {
            return bcrypt.hashAsync(password, salt);
        }).then(function(passwordHash) {
            user.passwordHash = passwordHash;
            return user;
        });
};
