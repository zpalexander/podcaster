'use strict';
/**
 * Profile.js
 *
 * A generator function for creating
 * profile objects to be passed to the
 * JSON Web Token library to sign
 */

/* Module Exports */
module.exports = Profile;

function Profile(username, feeds) {
    return {
        username: username,
        feeds: feeds
    };
}
