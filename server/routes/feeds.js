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
    var addFeed = require('./feeds/addFeed').add;

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
                res.status(result.status).send('Feed "' + feedID + '" refreshed successfully');
            })
            .catch(function(err) {
                res.status(err.status).send(err.message);
            });
    };

    exports.getEpisodes = function(req, res) {
        var feedID = req.params.feedID;
        getFeedEpisodes(feedID)
            .then(function(response) {
                res.status(response.status).send(response.body);
            })
            .catch(function(err) {
                res.status(err.status).send(err.message);
            });
    };

    exports.addFeed = function(req, res) {
        var feedParams = {
            id: req.body.id,
            name: req.body.name,
            url: req.body.url,
            category: req.body.category
        };
        addFeed(feedParams)
            .then(function(result) {
                res.status(result.status).send('Feed "' + feedParams.name + '" saved successfully');
            })
            .catch(function(err) {
                res.status(500).send(err);
            });
    };

    exports.deleteFeed = function(req, res) {
        Feed.removeAsync({id: req.body.id})
            .then(function() {
                return res.status(200).end();
            })
            .catch(function(err) {
                console.log('err removing feed: ', req.query.name, ' with error: ', err);
                return res.status(500).json({'err': err});
            });
    };


})();
