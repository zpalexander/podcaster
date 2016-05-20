'use strict';
/**
 * getFeedEpisodes.js
 *
 * Get all episodes of a certain feed
 */

/* Dependencies */
const Episode = require('../../models/Episode.js');
const getFeedFromID = require('./getFeedFromID');

/* Module Exports */
module.exports = getFeedEpisodes;

/* Logic */
function getFeedEpisodes(feedID) {
    return getFeedFromID(feedID)
        .then(response => {
            if (response instanceof Error) { throw response; }
            return Episode.findAsync({feed: feedID});
        })
        .then(episodes => {
            return { body: episodes, status: 200 };
        })
        .catch(err => err);
};
