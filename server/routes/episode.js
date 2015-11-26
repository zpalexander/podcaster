/**
 * episode.js
 *
 * Logic for episode operations
 */

/* Dependencies */
var Promise  = require('bluebird');
var feedRead = Promise.promisifyAll(require('feed-read'));
var Feed     = require('../models/Feed.js');
var Episode  = require('../models/Episode.js');


/* Route Handlers */
exports.toggleUnplayed = function(req, res) {
    if (typeof req.body.unplayedStatus === 'string') {
        if (req.body.unplayedStatus === 'true') {
            req.body.unplayedStatus = true;
            unplayedStatus = true;
        } else {
            unplayedStatus = false;
        }
    } else {
        unplayedStatus = req.body.unplayedStatus;
    }
    var episodeName      = req.body.episodeName;
    var updateConditions = {name: episodeName};
    var updateValue      = {unplayed: (!unplayedStatus)};
    var updateOptions    = {multi: false};
    Episode.updateAsync(updateConditions, updateValue, updateOptions)
        .then(function(result) {
            if (result.ok === 1) {
                var successMessage = 'Episode "' + episodeName + '" play status toggled from ';
                successMessage += unplayedStatus + ' to ' + !unplayedStatus;
                res.send(successMessage).status(200).end();
            } else {
                res.send('Episode play status not toggled, something went wrong').status(500).end();
            }
        })
        .catch(function(err) {
            throw err;
        });
};
