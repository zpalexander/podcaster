(function() {
    'use strict';
    /**
     * addFeed.js
     *
     * Logic to add a new feed to mongodb
     */

    /* Dependencies */
    var Feed = require('../../models/Feed.js');


    /* Logic */
    exports.add = function(feedParams) {
        var feed = new Feed(feedParams);
        return feed.saveAsync()
            .then(function(result) {
                return { body: result, status: 200 };
            })
            .catch(function(err) {
                return err;
            });
    };

}());
