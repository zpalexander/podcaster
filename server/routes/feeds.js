(function() {
    'use strict';
    /**
     * feed.js
     *
     * Logic for feed operations
     */

    // I should switch to node-feedparser
    var Feed     = require('../models/Feed.js');

    /* Logic */
    var getFeeds = require('./feeds/getFeeds').get;
    var getFeedEpisodes = require('./feeds/getFeedEpisodes').get;
    var refreshFeedEpisodes = require('./feeds/refreshFeedEpisodes').refresh;
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
        refreshFeedEpisodes(feedID)
            .then(function(result) {
                res.send('Feed "' + feedID + '" refreshed successfully').status(result.status).end();;
            })
            .catch(function(err) {
                res.send(err.message).status(err.status).end();
            });
    };

    exports.getEpisodes = function(req, res) {
        var feedID = req.params.feedID;
        getFeedEpisodes(feedID)
            .then(function(response) {
                res.send(response.body).status(response.status).end();
            })
            .catch(function(err) {
                res.send(err.message).status(err.status).end();
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


})();
