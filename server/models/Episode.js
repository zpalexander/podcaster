/**
 * Episode.js
 *
 * Mongoose model for podcast feed episode
 */

var mongoose = require('mongoose');
var Promise  = require('bluebird');

var episodeSchema = new mongoose.Schema({
    name : {type : String},
    feed: {type: String},
    description: {type: String},
    url :  {type : String},
    pubDate: {type: Date},
    playPosition: {type: Number},
    unplayed: {type: Boolean},
}, {versionKey : false});

var Episode = module.exports = mongoose.model('Episode', episodeSchema);

Promise.promisifyAll(Episode);
Promise.promisifyAll(Episode.prototype);