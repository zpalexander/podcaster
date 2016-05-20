'use strict';
/**
 * getFeedFromID.js
 *
 * Get a feed object from its ID
 */

/* Dependencies */
const Feed = require('../../models/Feed.js');
const errors = require('../../util/errors');

/* Module Exports */
module.exports = getFeedFromID;

/* Logic */
function getFeedFromID(_id) {
    return Feed.findAsync({'_id': _id})
        .then(feed => {
            let result;
            if (feed.length > 0) {
                result = { body: feed, status: 200 };
            } else {
                throw errors.notFound;
            }
            return result;
        })
        .catch(err => err);
};
