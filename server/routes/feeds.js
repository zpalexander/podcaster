(function() {
    'use strict';
    /**
     * feed.js
     *
     * Logic for feed operations
     */
    /* Dependencies */
    // Libraries
    var Promise = require('bluebird');
    // Logic
    var Feed     = require('../models/Feed.js');

    /* Logic */
    var getFeeds = require('./feeds/getFeeds').get;
    var getFeedEpisodes = require('./feeds/getFeedEpisodes').get;
    var refreshFeedEpisodes = require('./feeds/refreshFeedEpisodes').refresh;
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
        var feedIDs = req.body._ids;
        var feeds = [];
        feedIDs.forEach(function(feedID) {
            feeds.push(refreshFeedEpisodes(feedID));
        });
        Promise.all(feeds)
            .then(function(result) {
                res.status(200).send('Feeds "' + feedIDs + '" refreshed successfully');
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
