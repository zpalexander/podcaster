(function() {
    'use strict';
    /**
     * getFeeds.js
     *
     * Logic for retrieving feeds from the DB
     */

    /* Dependencies */
    var Feed = require('../../models/Feed.js');

    exports.get = function() {
        return Feed.findAsync({})
            .then(function(response) {
                return { message: response, status: 200 };
            })
            .catch(function(err) {
                return { message: err, status: 500 };
            });
    };

})();