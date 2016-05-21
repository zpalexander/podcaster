'use strict';
/**
 * getEpisodes.js
 *
 * Logic for getting all episodes from db
 */

/* Dependencies */
var Episode  = require('../../models/Episode');

/* Function */
module.exports = getEpisodes;

function getEpisodes() {
    return Episode
        .find({})
        .sort({pubDate: -1})
        .limit(200)
        .execAsync();
};
