(function() {
    'use strict';
    /**
     * episode.js
     *
     * Logic for episode operations
     */

    /* Logic */
    var getEpisodes = require('./episodes/getEpisodes').getEpisodes;
    var toggleUnplayed = require('./episodes/toggleUnplayed').toggle;
    var stringToBool = require('../util/stringToBool').default;


    /* Route Handlers */
    exports.get = function(req, res) {
        getEpisodes()
            .then(function(response) {
                res.status(200).send(response);
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    exports.toggleUnplayed = function(req, res) {
        var unplayedStatus = stringToBool(req.body.unplayedStatus);
        var episodeName = req.body.episodeName;
        toggleUnplayed(episodeName, unplayedStatus)
            .then(function(response) {
                res.status(response.status).send(response.message);
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

})();
