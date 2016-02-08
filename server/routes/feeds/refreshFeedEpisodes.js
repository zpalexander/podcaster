(function() {
    'use strict';
    /**
     * refreshFeedEpisodes.js
     *
     * Logic to refresh a feed's episodes
     */

    /* Dependencies */
    // I should switch to node-feedparser
    var Episode  = require('../../models/Episode.js');
    var FeedParser = require('feedparser');
    var request = require('request');
    var _ = require('lodash');
    /* Helpers */
    var getFeedFromID = require('./getFeedFromID').get;


    exports.refresh = function(feedID) {
        return getFeedFromID(feedID)
            .then(function(response) {
                if (response instanceof Error) { throw response; }
                return downloadFeeds(response, feedID);
            })
            .then(function(result) {
                return { body: result, status: 200 };
            })
            .catch(function(err) {
                return err;
            });
    };


    var downloadFeeds = function(response, feedID) {
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
            var i = -1;
            var feedEpisodes = episodes.map(function(episode) {
                i++;
                return new Episode({
                    id: i,
                    name: episode.title,
                    feed: feedID,
                    feedName: feedName,
                    description: episode.description.replace(/(<([^>]+)>)/ig,""),
                    url: episode.fileURL,
                    pubDate: new Date(episode.pubdate),
                    playPosition: 0,
                    unplayed: true
                });
            });
            return Episode.createAsync(feedEpisodes);
        });
    };

}());
