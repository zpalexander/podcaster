/**
 * view.js
 *
 * Logic to display the view
 */

var path = require('path');

/* Route Handler */
exports.show = function(req, res) {
    res.sendFile(__dirname + '../public/index.html');
};
