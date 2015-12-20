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


    /* Route Handlers */
    exports.get = function(req, res) {
        getEpisodes()
            .then(function(response) {
                res.send(response).status(200).end();
            })
            .catch(function(err) {
                res.send(err).status(500).end();
            });
    };

    exports.toggleUnplayed = function(req, res) {
        var unplayedStatus = false;
        if ((typeof req.body.unplayedStatus === 'string') && (req.body.unplayedStatus === 'true')) {
            req.body.unplayedStatus = true;
            unplayedStatus = true;
        } else {
            unplayedStatus = req.body.unplayedStatus;
        }
        var episodeName = req.body.episodeName;
        toggleUnplayed(episodeName, unplayedStatus)
            .then(function(response) {
                res.status(response.status).send(response.message).end();
            })
            .catch(function(err) {
                res.status(err.status).send(err.message).end();
            });
    };

})();
