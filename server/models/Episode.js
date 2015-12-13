/**
 * Episode.js
 *
 * Mongoose model for podcast feed episode
 */

var Promise  = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

var episodeSchema = new mongoose.Schema({
    name : {type : String},
    feed: {type: String},
    feedName: {type: String},
    description: {type: String},
    url:  {type : String},
    pubDate: {type: Date},
    playPosition: {type: Number},
    unplayed: {type: Boolean},
}, {versionKey : false});

var Episode = module.exports = mongoose.model('Episode', episodeSchema);

Promise.promisifyAll(Episode);
Promise.promisifyAll(Episode.prototype);
