'use strict';
/**
 * getEpisodes.js
 *
 * Logic for getting all episodes from db
 */

/* Dependencies */
var Episode  = require('../../models/Episode');

/* Function */
exports.getEpisodes = function() {
    return Episode
        .find({})
        .sort({pubDate: -1})
        .limit(200)
        .execAsync();
};
