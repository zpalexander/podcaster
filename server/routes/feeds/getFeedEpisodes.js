(function() {
    'use strict';
    /**
     * getFeedEpisodes.js
     *
     * Get all episodes of a certain feed
     */

    /* Dependencies */
    var Episode  = require('../../models/Episode.js');
    var getFeedFromID = require('./getFeedFromID').get;


    /* Logic */
    exports.get = function(feedID) {
        return getFeedFromID(feedID)
            .then(function(response) {
                if (response instanceof Error) { throw response; }
                return Episode.findAsync({feed: feedID});
            })
            .then(function(episodes) {
                return { body: episodes, status: 200 };
            })
            .catch(function(err) {
                throw err;
            })
    };

})();
