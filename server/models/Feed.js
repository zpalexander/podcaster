/**
 * Feed.js
 *
 * Mongoose model for podcast feed
 */

var mongoose = require('mongoose');
var Promise  = require('bluebird');

var feedSchema = new mongoose.Schema({
    id   : {type: String, unique: true},
    name : {type : String, unique: true},
    url :  {type : String},
    category: {type : String}
}, {versionKey : false});

var Feed = module.exports = mongoose.model('Feed', feedSchema);

Promise.promisifyAll(Feed);
Promise.promisifyAll(Feed.prototype);
