'use strict';
/**
 * toggleUnplayed.js
 *
 * Logic to toggle an episode's played status
 */
var Episode = require('../../models/Episode');
var errors = require('../../util/errors');

module.exports = toggleUnplayed;

function toggleUnplayed(episodeIDs, unplayedStatus) {
    var updateConditions = {'_id': {$in: episodeIDs}};
    var updateValue      = {unplayed: (!unplayedStatus)};
    var updateOptions    = {multi: true};
    return Episode.updateAsync(updateConditions, updateValue, updateOptions)
        .then(handleToggleResult)
        .catch(err => err);
};

function handleToggleResult(result) {
    if (result.nModified === 0) { throw errors.notFound; }
    if (result.ok !== 1) { throw errors.internalError; }
    return { message: 'Toggle successful', status: 200 };
}
