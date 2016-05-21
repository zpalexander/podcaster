'use strict';
/**
 * addFeed.js
 *
 * Logic to add a new feed to mongodb
 */

/* Dependencies */
const Feed = require('../../models/Feed.js');
const refreshFeedEpisodes = require('./refreshFeedEpisodes');

/* Module Exports */
module.exports = addFeed;

/* Logic */
function addFeed(feedParams) {
    var feed = new Feed(feedParams);
    // Save feed, get its episodes and
    // return outcome status
    return feed.saveAsync()
        .then(result => result._id)
        .then(feedID => refreshFeedEpisodes(feedID))
        .then(result => result)
        .catch(err => err);
};
