'use strict';
/**
 * getFeedFromID.js
 *
 * Get a feed object from its ID
 */

/* Dependencies */
var Feed = require('../../models/Feed.js');
var errors = require('../../util/errors');

/* Logic */
exports.get = function(_id) {
    return Feed.findAsync({'_id': _id})
        .then(function(feed) {
            if (feed.length > 0) {
                return { body: feed, status: 200};
            } else {
                throw errors.notFound;
            }
        })
        .catch(function(err) {
            return err;
        });
};
