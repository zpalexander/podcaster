'use strict';
/**
 * getFeeds.js
 *
 * Logic for retrieving feeds from the DB
 */

/* Dependencies */
const Feed = require('../../models/Feed.js');

/* Module Exports */
module.exports = getFeeds;

/* Logic */
function getFeeds() {
    return Feed.findAsync({})
        .then(response => {
            return { body: response, status: 200 };
        })
        .catch(err => {
            return { body: err, status: 500 };
        });
};
