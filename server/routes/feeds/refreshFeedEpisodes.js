(function() {
    'use strict';
    /**
     * refreshFeedEpisodes.js
     *
     * Logic to refresh a feed's episodes
     */

    /* Dependencies */
    // I should switch to node-feedparser
    var Promise = require('bluebird');
    var feedRead = Promise.promisifyAll(require('feed-read'));
    var Episode  = require('../../models/Episode.js');
    /* Helpers */
    var getFeedFromID = require('./getFeedFromID').get;


    exports.refresh = function(feedID) {
        var feedName;
        return getFeedFromID(feedID)
            .then(function(response) {
                if (response instanceof Error) {
                    throw response;
                } else {
                    feedName = response.body[0].name;
                    return feedRead.getAsync(response.body[0].url);
                }
            })
            .then(function(episodes) {
                var i = -1;
                var feedEpisodes = episodes.map(function(episode) {
                    i++;
                    return new Episode({
                        id: i,
                        name: episode.title,
                        feed: feedID,
                        feedName: feedName,
                        description: episode.content,
                        url: episode.link,
                        pubDate: new Date(episode.published),
                        playPosition: 0,
                        unplayed: true
                    });
                });
                return feedEpisodes;
            })
            .then(function(feedEpisodes) {
                return Episode.createAsync(feedEpisodes);
            })
            .then(function(result) {
                return { body: result, status: 200 };
            })
            .catch(function(err) {
                return err;
            });
    };

})();
