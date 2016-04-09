(function() {
    'use strict';
    /**
     * addFeed.js
     *
     * Logic to add a new feed to mongodb
     */

    /* Dependencies */
    var Feed = require('../../models/Feed.js');
    var refreshFeedEpisodes = require('./refreshFeedEpisodes').refresh;

    /* Logic */
    exports.add = function(feedParams) {
        var feed = new Feed(feedParams);
        // Save feed, get its episodes and
        // return outcome status
        return feed.saveAsync()
            .then(function(result) {
                return result._id;
            })
            .then(function(feedID) {
                refreshFeedEpisodes(feedID);
            })
            .then(function(result) {
                return result;
            })
            .catch(function(err) {
                return err;
            });
    };

}());
