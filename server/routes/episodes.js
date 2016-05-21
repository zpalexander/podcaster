'use strict';
/**
 * episode.js
 *
 * Route handlers for episode operations
 */

/* Logic */
var getEpisodes = require('./episodes/getEpisodes');
var toggleUnplayed = require('./episodes/toggleUnplayed');
var stringToBool = require('../util/stringToBool');


/* Route Handlers */
exports.get = function(req, res) {
    getEpisodes()
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send(err));
};

exports.toggleUnplayed = function(req, res) {
    var unplayedStatus = stringToBool(req.body.unplayedStatus);
    var episodeName = req.body.episodeIDs;
    toggleUnplayed(episodeName, unplayedStatus)
        .then(response => res.status(response.status).send(response.message))
        .catch(err => res.status(500).send(err));
};
