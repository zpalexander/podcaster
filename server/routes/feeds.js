'use strict';
/**
 * feed.js
 *
 * Logic for feed operations
 */
/* Dependencies */
// Libraries
var Promise = require('bluebird');
var errors = require('../util/errors');
var validator = require('validator');
// Models
var Feed = require('../models/Feed');
var Episode = require('../models/Episode');
// Logic
var getFeeds = require('./feeds/getFeeds');
var getFeedEpisodes = require('./feeds/getFeedEpisodes');
var refreshFeedEpisodes = require('./feeds/refreshFeedEpisodes');
var addFeed = require('./feeds/addFeed');

/* Route Handlers */
exports.getFeeds = function(req, res) {
    getFeeds()
        .then(response => res.send(response.body).status(response.status).end())
        .catch(err => res.send(err.body).status(err.status).end());
};

exports.refreshEpisodes = function(req, res) {
    var feedIDs = req.body._ids;
    var feeds = [];
    feedIDs.forEach(feedID => feeds.push(refreshFeedEpisodes(feedID)));
    Promise.all(feeds)
        .then(() => res.status(200).send('Feeds "' + feedIDs + '" refreshed successfully'))
        .catch(err => res.status(err.status).send(err.message));
};

exports.getEpisodes = function(req, res) {
    var feedID = req.params.feedID;
    getFeedEpisodes(feedID)
        .then(response => res.status(response.status).send(response.body))
        .catch(err => res.status(err.status).send(err.message));
};

exports.addFeed = function(req, res) {
    var feedParams = {
        name: req.body.name,
        url: req.body.url,
        category: req.body.category
    };
    // Valadate parameters
    if (feedParams.name === '') {
        res.status(errors.invalidFeedName.status).send(errors.invalidFeedName);
        return;
    }
    if (!validator.isURL(feedParams.url)) {
        res.status(errors.invalidFeedURL.status).send(errors.invalidFeedURL);
        return;
    }
    addFeed(feedParams)
        .then(result => res.status(result.status).send('Feed "' + feedParams.name + '" saved successfully'))
        .catch(err => res.status(500).send(err));
};

exports.deleteFeed = function(req, res) {
    Feed.removeAsync({_id: req.body.id})
        .then(() => Episode.removeAsync({feed: req.body.id}))
        .then(() => res.status(200).end())
        .catch(err => {
            console.log('err removing feed: ', req.query.name, ' with error: ', err);
            return res.status(500).json({'err': err});
        });
};
