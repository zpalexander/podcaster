(function() {
    'use strict';
    /**
     * feed.js
     *
     * Logic for feed operations
     */

    var Promise  = require('bluebird');
    // I should switch to node-feedparser
    var feedRead = Promise.promisifyAll(require('feed-read'));
    var Feed     = require('../models/Feed.js');
    var Episode  = require('../models/Episode.js');

    /* Logic */
    var getFeeds = require('./feeds/getFeeds').get;
    var refreshFeed = require('./feeds/refreshFeed').refresh;
    var getFeedFromID = require('./feeds/getFeedFromID').get;

    /* Route Handlers */
    exports.getFeeds = function(req, res) {
        getFeeds()
            .then(function(response) {
                res.send(response.message).status(response.status).end();
            })
            .catch(function(err) {
                res.send(err.message).status(err.status).end();
            });
    };

    exports.refreshEpisodes = function(req, res) {
        var feedID = req.body.id;
        refreshFeed(feedID)
            .then(function(result) {
                res.send('Feed "' + feedID + '" refreshed successfully').status(200).end();;
            })
            .catch(function(err) {
                res.send(err.message).status(err.status).end();
            });
    };

    exports.getEpisodes = function(req, res) {
        var feedID = req.params.feedID;
        getFeedFromID(feedID)
            .then(function(feed) {
                if (feed === 404) {
                    res.send('404: Feed not found').status(404).end();
                } else {
                    return Episode.findAsync({feed: feedID});
                }
            })
            .then(function(episodes) {
                res.send(episodes).end();
            })
            .catch(function(err) {
                throw err;
            })
    };

    exports.addFeed = function(req, res) {
        var feed = new Feed({
            id: req.body.id,
            name: req.body.name,
            url: req.body.url,
            category: req.body.category
        });
        feed.saveAsync()
            .then(function(result) {
                if (result) {
                    res.send('Feed saved successfully').status(200).end();
                } else {
                    res.status(500).end();
                }
            })
            .catch(function(err) {
                throw err;
            })
    };

    exports.deleteFeed = function(req, res) {
        Feed.removeAsync({id: req.body.id})
            .then(function() {
                return res.status(200).end();
            })
            .catch(function(err) {
                console.log('err removing feed: ', req.query.name, ' with error: ', err);
                return res.status(500).json({'err': err}).end();
            });
    };

    /* Helper Functions */
    // var getFeedFromID = function(id) {
    //     return new Promise(function(resolve, reject) {
    //         Feed.findAsync({'id': id})
    //             .then(function(feed) {
    //                 if (feed.length > 0) {
    //                     resolve(feed);
    //                 } else {
    //                     resolve(404);
    //                 }
    //             })
    //             .catch(function(err) {
    //                 console.log(err);
    //             });
    //     });
    // };

})();
