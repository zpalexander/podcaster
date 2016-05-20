'use strict';
/**
 * Episode.js
 *
 * Mongoose model for podcast feed episode
 */

const Promise  = require('bluebird');
const mongoose = Promise.promisifyAll(require('mongoose'));

const episodeSchema = new mongoose.Schema({
    id: {type: Number},
    name : {type : String},
    feed: {type: String},
    feedName: {type: String},
    description: {type: String},
    url: {type : String},
    image: { type: String },
    pubDate: {type: Date},
    playPosition: {type: Number},
    unplayed: {type: Boolean}
}, {versionKey : false});

const Episode = module.exports = mongoose.model('Episode', episodeSchema);

Promise.promisifyAll(Episode);
Promise.promisifyAll(Episode.prototype);
