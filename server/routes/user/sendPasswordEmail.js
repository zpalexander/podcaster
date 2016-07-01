'use strict';
/**
 * sendResetEmail.js
 *
 * Logic to send a password
 * reset email to the user
 */
/* Dependencies */
const emailTransporter = require('../../util/emailTransporter');

/* Module Exports */
module.exports = sendPasswordEmail;


/* Logic */
function sendPasswordEmail(username, appUrl, resetToken, isNewUser) {
    var resetLink = appUrl + '/password?' + 'user=' + username + '&token=' + resetToken.token;
    var message = resetPasswordMessage(username, resetLink, isNewUser);
    var transporter = emailTransporter.getTransporter();
    var mailOptions = emailTransporter.buildMailOptions(username, message.subject, message.body);
    transporter.sendMail(mailOptions);
    return resetLink;
};


function resetPasswordMessage(username, resetLink, isNewUser) {
    var message = {};
    if (isNewUser) {
        message.subject = 'Welcome to the Podcaster';
        message.body = ['',
            'Hello ' + username + ': <br><br>',
            'You have been added as a user of the Podcaster app!<br>',
            'Please follow the link below to complete registration. ',
            'You must complete registration within 7 days or your ',
            'registration link will expire. If this happens, please ',
            'reach out to the Podcaster for a new registration link',
            'Thank you!<br><br>' + resetLink + ''
        ].join('');
    } else {
        message.subject = 'Podcaster: Password Reset';
        message.body = ['',
            'Hello ' + username + ': <br><br>',
            'Here is your one time password reset URL.<br>',
            'Please click on or copy and paste the following URL into your browser to reset your password: <br>',
            '<br><a href="' + resetLink + '">' + resetLink + '</a><br><br>',
            'Please note that this link will expire in 7 days.<br>',
            'Thank you!'
        ].join('');
    }
    return message;
};
