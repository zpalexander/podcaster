'use strict';
/**
 * emailTransporter.js
 *
 * Email bot service
 */

/* Dependencies */
const Promise = require('bluebird');
const nodemailer = Promise.promisifyAll(require('nodemailer'));
const validator = require('validator');
const config = require('./config');
const errors = require('./errors');

/* Module exports */
exports.getTransporter = getTransporter;
exports.buildMailOptions = buildMailOptions;


/* Logic */
function getTransporter() {
    if (!validator.isEmail(config.emailOptions.username)) {
        throw errors.invalidEmailAddress;
    }
    return nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: config.emailOptions.username,
            pass: config.emailOptions.password
        }
    });
};


function buildMailOptions(recipient, subject, body) {
    if (!validator.isEmail(recipient)) {
        throw errors.invalidEmailAddress;
    }
    return {
        from: 'Sender Address',
        to: recipient,
        subject: subject,
        html: body
    };
};
