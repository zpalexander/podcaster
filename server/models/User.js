'use strict';
/**
 * User.js
 *
 * Mongoose model for a user
 * of the application
 */
/* Dependencies */
const mongoose = require('mongoose');
const Promise  = require('bluebird');

/* Schema */
const userSchema = new mongoose.Schema({
    username:             {type: String, unique: true},
    passwordHash:         {type: String},
    feeds:                {type: Array, default: []},
    resetPasswordToken:   {type: String, default: null},
    resetPasswordExpires: {type: Date, default: null}
}, {versionKey: false});
userSchema.index({ username: 1 });

/* Methods */
userSchema.statics.findAllAsync = () => {
    return User.findAsync({}, null, {sort: 'username'});
};

userSchema.statics.findByUsernameAsync = (username) => {
    return User.findOneAsync({username: username});
};

/* Export */
var User = module.exports = mongoose.model('User', userSchema);

Promise.promisifyAll(User);
Promise.promisifyAll(User.prototype);
