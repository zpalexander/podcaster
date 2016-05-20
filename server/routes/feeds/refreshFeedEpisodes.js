'use strict';
/**
 * refreshFeedEpisodes.js
 *
 * Logic to refresh a feed's episodes
 */

/* Dependencies */
var Episode  = require('../../models/Episode.js');
var FeedParser = require('feedparser');
var request = require('request');
var _ = require('lodash');
/* Helpers */
var getFeedFromID = require('./getFeedFromID').get;
var getFeedEpisodes = require('./getFeedEpisodes').get;


exports.refresh = function(feedID) {
    return getFeedFromID(feedID)
        .then(function(response) {
            if (response instanceof Error) { throw response; }
            return downloadEpisodes(response, feedID);
        })
        .then(function(result) {
            return { body: result, status: 200 };
        })
        .catch(function(err) {
            return err;
        });
};


var downloadEpisodes = function(response, feedID) {
    var feedName = response.body[0].name;
    var feedURL = response.body[0].url;
    var req = request(feedURL);
    var feedparser = new FeedParser(/*options*/);
    var episodes = [];

    req.on('error', function(error) {
        throw error;
    });

    req.on('response', function() {
        var stream = this;
        //if (res.statusCode != 200) { return this.emit('error', new Error('Bad status code')); }
        stream.pipe(feedparser);
    });

    feedparser.on('error', function(error) {
        // always handle errors
        throw error;
    });

    feedparser.on('readable', function() {
        // This is where the action is!
        var stream = this;
        var meta = this.meta; // **NOTE** the "meta" is always available in the context of the feedparser instance
        var item;
        var isOk = true;
        while (item = stream.read()) {
            if (_.get(item, 'enclosures[0].url', false)) {
                item.fileURL = item.enclosures[0].url;
                episodes.push(item);
            }
        }
    });

    feedparser.on('end', function() {
        return saveEpisodes(episodes, feedID, feedName);
    });
};


var saveEpisodes = function(newEpisodes, feedID, feedName) {
    return getFeedEpisodes(feedID)
        .then(function(feedEpisodes) {
            var filteredNewEpisodes = [];
            var existingEpisodeNames = feedEpisodes.body.map((episode) => {
                return episode.name;
            });
            // If any episode titles match, remove them from the list
            newEpisodes.forEach((episode) => {
                if (existingEpisodeNames.indexOf(episode.title) === -1) {
                    filteredNewEpisodes.push(episode);
                }
            })
            return filteredNewEpisodes;
        })
        .then(function(filteredNewEpisodes) {
            var newEpisodesSchema = filteredNewEpisodes.map(function(episode) {
                var imageURL = _.get(episode, 'meta.image.url', '');
                return new Episode({
                    name: episode.title,
                    feed: feedID,
                    feedName: feedName,
                    description: episode.description.replace(/(<([^>]+)>)/ig,""),
                    url: episode.fileURL,
                    image: imageURL,
                    pubDate: new Date(episode.pubdate),
                    playPosition: 0,
                    unplayed: true
                });

            });
            return Episode.createAsync(newEpisodesSchema);
        })

};
