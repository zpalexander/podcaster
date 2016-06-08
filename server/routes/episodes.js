'use strict';
/**
 * episodes.js
 *
 * Route handlers for episode operations
 */

/* Logic */
const getEpisodes = require('./episodes/getEpisodes');
const toggleUnplayed = require('./episodes/toggleUnplayed');
const stringToBool = require('../util/stringToBool');


/* Module Exports */
exports.get = getEpisodesHandler;
exports.toggleUnplayed = toggleUnplayedHandler;


/* Route Handlers */
function getEpisodesHandler(req, res) {
    getEpisodes()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
};

function toggleUnplayedHandler(req, res) {
    var unplayedStatus = stringToBool(req.body.unplayedStatus);
    var episodeName = req.body.episodeIDs;
    toggleUnplayed(episodeName, unplayedStatus)
        .then(response => res.status(response.status).send(response.message))
        .catch(err => res.status(500).send(err));
};
