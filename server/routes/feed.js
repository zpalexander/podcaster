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

/* Route Handlers */
exports.getFeeds = function(req, res) {
    Feed.findAsync({})
        .then(function(response) {
            if (response.length > 0) {
                res.send(response).status(200).end();
            } else {
                res.send('No feeds').status(404).end();
            }
        })
        .catch(function(err) {
            res.send(err).status(500).end();
        });
}

exports.updateContent = function(req, res) {
    var feedName;
    var feedID = req.body.id;
    getFeedFromID(feedID)
        .then(function(feed) {
            if (feed === 404) {
                throw new Error('No feed');
            } else {
                feedName = feed[0].name;
                return feedRead.getAsync(feed[0].url);
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
            if (result) {
                res.send('Episodes saved successfully').status(200).end();
            } else {
                res.status(500).end();
            }
        })
        .catch(function(err) {
            res.send('404: Feed not found').status(404).end();
        });
};

exports.getContent = function(req, res) {
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
}

/* Helper Functions */
var getFeedFromID = function(id) {
    return new Promise(function(resolve, reject) {
        Feed.findAsync({'id': id})
            .then(function(feed) {
                if (feed.length > 0) {
                    resolve(feed);
                } else {
                    resolve(404);
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    });
};
